// import React ,{useState}from 'react'
// import CommonSection from '../components/CommonSection';
// import Helmet from '../components/Helmet';

// const Login = () => {
//   const [errorMessages, setErrorMessages] = useState({});
// const [isSubmitted, setIsSubmitted] = useState(false);

//   // User Login info
//   const database = [
//     {
//       username: "ibadzade",
//       password: "password"
//     },
   
//   ];

//   const errors = {
//     uname: "username is wrong",
//     pass: "Password is wrong"
//   };

//   const handleSubmit = (event) => {
//     //Prevent page reload
//     event.preventDefault();

//     var { uname, pass } = document.forms[0];

//     // Find user login info
//     const userData = database.find((user) => user.username === uname.value);

//    // Compare user info
//    if (userData) {
//     if (userData.password !== pass.value) {
//       // Invalid password
//       setErrorMessages({ name: "pass", message: errors.pass });
//     } else {
//       setIsSubmitted(true);
//     }
//   } else {
//     // Username not found
//     setErrorMessages({ name: "uname", message: errors.uname });
//   }
// };
//  // Generate JSX code for error message
//  const renderErrorMessage = (name) =>
//  name === errorMessages.name && (
//    <div className="error">{errorMessages.message}</div>
//  );
//  const logout = (e) => {
//   e.preventDefault();
// 	setIsSubmitted(false);
// };

//   const renderForm = (
//     <div className="form">
//       <form onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label>Username </label>
//           <input type="text" name="uname" required />
//           {renderErrorMessage("uname")}
//         </div>
//         <div className="input-container">
//           <label>Password </label>
//           <input type="password" name="pass" required />
//           {renderErrorMessage("pass")}
//         </div>
//         <div className="button-container">
//           <input type="submit" />
          
//         </div>
//         <div className="forgot text-end mt-5 "><a href="#" className='text-dark text-end'>Forgot password  </a></div>
//       </form>
     
//     </div>
//   );

//   return (
//     <Helmet title='login'>

// <div className="app  ">
//   <div className="d-flex justify-content-center align-items-center">
//       <div className="login-form ">
//         <div className="title">Sign In</div>
//         {isSubmitted ? <div className='success'>{database[0].username} is successfully logged in
//         <br /><div><button onClick={logout} className='logout'>Log out</button></div></div> : renderForm}
//       </div>
//       </div>
//     </div>
//     </Helmet>
//   )


// }

// export default Login
