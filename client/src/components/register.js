import React , {useState } from 'react'
import { NavLink ,useHistory} from 'react-router-dom'

const Register = ()=>{
   const history = useHistory();
    const [user , setUser]=useState({
        email:"",password:"",cpassword:""
    });
    let name; ; let value;
    
    const handleInputs =(e)=>{
            name=e.target.name;
            value=e.target.value;
            setUser({...user,[name]:value});
        }
    const postData = async (e)=>{
        e.preventDefault();
        const {email , password , cpassword} =user;
        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email , 
                password , 
                cpassword
            })
        });
        const data = await res.json();
        if(data.status===422 || !data){
            window.alert("Invalid registration");
            console.log("Invalid registration");
        } else {
            window.alert("registration successful");
            console.log("registration successful");
            history.push("/");
        }
    } 
  return (
      <>
      <div className="upper">
      <div className="signup-form">
                <form  method="POST" >
                <h2>Sign Up</h2>
                <p>Please fill in this form to create an account!</p>
                <hr />
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">
                                <i className="fa fa-paper-plane"></i>
                            </span>
                        </div>
                        <input type="email" className="form-control" name="email" placeholder="Email Address"  
                         value={user.email}
                         onChange={handleInputs}
                         required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">
                            <i className="fas fa-lock"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="password" placeholder="Password" 
                         value={user.password}
                         onChange={handleInputs}
                         required="required" />
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text form-control">
                            <i className="fas fa-key"></i>
                            </span>
                        </div>
                        <input type="password" className="form-control" name="cpassword" placeholder="Confirm Password"  
                         value={user.cpassword}
                         onChange={handleInputs}
                        required="required" />
                    </div>
                </div>

                <div className="form-group">
                    <button type="submit" onClick={postData} className="btn btn-primary btn-lg">Sign Up</button>
                </div>

                <div className="text-center">Already have an account? <NavLink to="/">Login here</NavLink></div>
                </form>
            </div>
      </div>
           

        </>

  )
}

export default Register;