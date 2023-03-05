import { useContext, useRef, useState } from "react";
import { Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Info from "../components/Info";
import { UserContext } from "../context/UserContext";
import userData from "./UserData";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// interface userType{
//     email:string,
//     pass:string
// }
// const userData:userType={
//     email:"ibadzade",
//     pass:"1111"
// }


// interface propType{
//     pushData:(email:string)=>void
// }

const Login = () => {
  const notafiy:any = () => toast.success('Your password or email is wrong', {
    position: "bottom-right",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
  const notaf:any = () => toast.success('please,fill input filed', {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPassRef = useRef<HTMLInputElement>(null);
    const [users,setUsers] = useContext<any>(UserContext);
    let [userName,setUserName] = useContext<any>(UserContext);
    const navigate = useNavigate()
    const formSubmit =(e: { preventDefault: () => void; })=>{
        e.preventDefault();
        if(!inputEmailRef.current?.value || !inputPassRef.current?.value){
         notaf()
            setUsers(false)
        }else{
            if(inputEmailRef.current?.value === userData.email && inputPassRef.current?.value ===userData.pass){
                setUsers(true);
                navigate('/');
             
            }else{
               notafiy()
            }
        }
    }
    
  return (
    <div className="w-100 app">
    <Container>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-center my-5 title">Login</h1>
        <Col md={6}>
          <Form onSubmit={formSubmit} className='login-form'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" ref={inputEmailRef} />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" ref={inputPassRef} />
            </Form.Group>
          
            <button  type="submit" className="btn btn-dark">
              Login
            </button>
            <ToastContainer
             toastStyle={{ backgroundColor: "#000",color:"red" }}
              position="top-center"
              autoClose={5000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Form>
        </Col>
      </div>
    </Container>
    </div>
  );
};

export default Login;
