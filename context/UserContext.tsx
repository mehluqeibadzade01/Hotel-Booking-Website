import React,{useState,createContext, useEffect} from "react";
import { initialState } from "react-use-cart";
// import Userdata from '../data/Userdata'
interface propType{
    children?: JSX.Element|JSX.Element[];
}
function setLocalStorage(key:any, value:any) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // catch possible errors:
      // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
    }
  }
  
  function getLocalStorage(key:any, initialValue:any) {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (e) {
      // if error, return initial value
      return initialValue;
    }
  }
type AppContextType = {}
export const UserContext = createContext<AppContextType|null>(null);

export const UserProvider =(props:propType)=>{
    const [users,setUsers] =useState(() => getLocalStorage("user", false));;
    useEffect(() => {
        setLocalStorage("user", users);
      }, [users]);

    return(
        <UserContext.Provider value={[users,setUsers]}>
            {props.children}
        </UserContext.Provider>
    )

}