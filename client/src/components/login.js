import React , {useState} from 'react'
import { NavLink,useHistory } from 'react-router-dom';

const Login = ()=>{
    const history = useHistory();
    const [ email , setEmail] = useState('');
    const [ password , setPassword] = useState('');
    const loginUser = async (e) =>{
        e.preventDefault();
            const res = await fetch("/signin",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email , 
                    password 
                })
            });
            const data = await res.json();
            if(res.status===400 || !data){
                window.alert("Invalid details")
            } else {
                window.alert("successfull login");
                history.push("/create");
            }
    }
  return (
    <>
    <div className="upper">
             <div className="login-form">
    <form  method="POST">
        <h2 className="text-center">Log in</h2>   
        <div className="form-group">
        	<div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text form-control">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="email" className="form-control" name="email" 
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                 placeholder="email" required="required"/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text form-control">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" className="form-control" name="password" 
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                 placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" onClick={loginUser} className="btn btn-primary login-btn btn-block">Log in</button>
        </div>

		{/* <div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with google</p>
        <div className="text-center social-btn">
			  <NavLink to="/" className="btn btn-danger"><i className="fa fa-google"></i> Google</NavLink>
        </div> */}
    </form>
    <p className="text-center text-muted small">Don't have an account? <NavLink to="/signup">Sign up here!</NavLink></p>
    </div>
    </div>
   </>
     
  )
}

export default Login;