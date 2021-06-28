import React , {useEffect} from 'react'
import { NavLink ,useHistory} from 'react-router-dom'
import home from "../images/home.svg"
import "bootstrap/dist/css/bootstrap.css";

const Logout=()=>{
    const history = useHistory();
    useEffect(()=>{
        fetch('/logout')
    })
    return (
        <>
            <div className="outerL">
            <h3 className="text-center my-4">Thankyou for using Postmail comeback again 😉</h3>
            <div className="imgDiv">
            <img src={home} className="logoutImg" alt="home img" />
            </div>
            <div className="linkDiv">
            <NavLink to="/" className="redBtn m-auto link">Go back to login</NavLink>
            </div>


            </div>
        </>
    )
}
export default Logout;