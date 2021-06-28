import React, {useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import { useHistory} from 'react-router-dom'

const Create = ()=>{ 
  const history = useHistory();
  const [user , setUser]=useState({
      to:"",subject:"",message:"",day:"",date:"",time:"",schedule:"",month:"",times:""
  });
  let name;  let value;
  
  const handleInputs =(e)=>{
          name=e.target.name;
          value=e.target.value;
          setUser({...user,[name]:value});
      }
  const callCreatePage = async()=>{
    try{
        const res = await fetch("/create",{
          method:"GET",
          headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
          },
          credentials:"include"
        });
        const data = await res.json();
        if(data.currentRequest.length!==0){
          window.alert("Already One job running first terminate it");
          history.push("/running");
        }
        if(!res.status===200){
          const error = new Error(res.error);
          window.alert(error);
          throw error;
        }
    }catch(err){
        console.log(err);
        history.push("/");
    }
  }
  const createEmail = async (e) =>{
    e.preventDefault();
    const {to , 
    subject,
    message,
    day,
    date,
    time,
    schedule,
    month ,
  times} = user;
        const res = await fetch("/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                to , 
                subject,
                message,
                day,
                date,
                time,
                schedule,
                month,
                times
            })
        });
        const data = await res.json();
        if(res.status===400 || !data){
            window.alert("Invalid details")
        } else {
            window.alert("successfull created");
            
        }
        history.push("/running");
}
  useEffect(()=>{
    callCreatePage();
  },[]);
  return (
      <>
          <div className="upper">
                <div className="signup-form create-form">
               
                  <form  method="POST">
                  <div className="row">
                  <h2>Create mail</h2>
                  </div>
                  <div className="row">
                              <div className="col-lg-6  col-md-12">
                                
                                  <div className="mb-3">
                                        <label className="form-label">To :</label>
                                        <input type="email" required name="to"  className="form-control" id="exampleFormControlInput1" 
                                          value={user.to}
                                          onChange={handleInputs}
                                        placeholder="name@example.com" />
                                  </div>
                                  <div className="mb-3">
                                        <label  className="form-label">Subject :</label>
                                        <input type="text" required name="subject" className="form-control" 
                                          value={user.subject}
                                          onChange={handleInputs}
                                        id="exampleFormControlTextarea2" />
                                  </div>
                                  <div className="mb-3">
                                              <label className="form-label">Text :</label>
                                              <textarea required name="message" className="form-control textarea" id="exampleFormControlTextarea1"
                                                value={user.message}
                                                onChange={handleInputs}
                                               rows="3" col="3"></textarea>
                                  </div>`
                                </div>
                      <div className="col-lg-6 col-md-12">
                              <div className="row ">
                              <label className="form-label">Schedule :</label>
                              <select className="form-select" required
                                value={user.schedule}
                                onChange={handleInputs}
                               name="schedule" aria-label="Default select example">
                               <option value="00">Select the schedule</option>
                                <option value="1">Mail after every 30 seconds</option>
                                <option value="2">Mail at particular day every week</option>
                                <option value="3">Mail at particular date every month</option>
                                <option value="4">Mail at particular date every year</option>
                              </select>
                              </div>
                                    <div className="row my-4" >
                                    <div className="col-6">
                                    <label className="form-label">No. of time you want to send :</label>
                                    <input type="number" required name="times" className="form-control" placeholder="Example : 1" required
                                          value={user.times}
                                          onChange={handleInputs}
                                        id="exampleFormControlTextarea2" />
                                    </div>
                                   <div className="col-6">
                                   <label  className="form-label">Day :</label>
                                    <select name="day"
                                      value={user.day}
                                      onChange={handleInputs}
                                     className="form-select">
                                        <option value="00">Select the day</option>
                                        <option value="01">Sunday</option>
                                        <option value="02">Monday</option>
                                        <option value="03">Tuesday</option>
                                        <option value="04">Wednesday</option>
                                        <option value="05">Thursday</option>
                                        <option value="06">Friday</option>
                                        <option value="07">Saturday</option>
                                    </select> 
                                   </div>
                                    </div>
                                    <div className="row my-2">
                                    <label  className="form-label">Date :</label>
                                    <select name="date"
                                      value={user.date}
                                      onChange={handleInputs}
                                     className="form-select">
                                          <option value="00">Select the date</option>
                                          <option value="01">1</option>
                                          <option value="02">2</option>
                                          <option value="03">3</option>
                                          <option value="04">4</option>
                                          <option value="05">5</option>
                                          <option value="06">6</option>
                                          <option value="07">7</option>
                                          <option value="08">8</option>
                                          <option value="09">9</option>
                                          <option value="10">10</option>
                                          <option value="11">11</option>
                                          <option value="12">12</option>
                                          <option value="13">13</option>
                                          <option value="14">14</option>
                                          <option value="15">15</option>
                                          <option value="16">16</option>
                                          <option value="17">17</option>
                                          <option value="18">18</option>
                                          <option value="19">19</option>
                                          <option value="20">20</option>
                                          <option value="21">21</option>
                                          <option value="22">22</option>
                                          <option value="23">23</option>
                                          <option value="24">24</option>
                                          <option value="25">25</option>
                                          <option value="26">26</option>
                                          <option value="27">27</option>
                                          <option value="28">28</option>
                                          <option value="29">29</option>
                                          <option value="30">30</option>
                                          <option value="31">31</option>
                                    </select>    
                                    </div>
                                    <div className="row my-2" >
                                    <label  className="form-label">Month :</label>
                                    <select name="month" value={user.month} onChange={handleInputs} className="form-select">
                                    <option value="00">Select the month</option>
                                        <option value="01">January</option>
                                        <option value="02">February</option>
                                        <option value="03">March</option>
                                        <option value="04">April</option>
                                        <option value="05">May</option>
                                        <option value="06">June</option>
                                        <option value="07">July</option>
                                        <option value="08">August</option>
                                        <option value="09">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select> 
                                    </div>
                                    <div className="row my-2">
                                    <label className="form-label">Time :</label>
                                    <select name="time"
                                      value={user.time}
                                      onChange={handleInputs}
                                     className="form-select">
                                          <option value="25">Select the time</option>
                                          <option value="0">00:00</option>
                                          <option value="01">01:00</option>
                                          <option value="02">02:00</option>
                                          <option value="03">03:00</option>
                                          <option value="04">04:00</option>
                                          <option value="05">05:00</option>
                                          <option value="06">06:00</option>
                                          <option value="07">07:00</option>
                                          <option value="08">08:00</option>
                                          <option value="09">09:00</option>
                                          <option value="10">10:00</option>
                                          <option value="11">11:00</option>
                                          <option value="12">12:00</option>
                                          <option value="13">13:00</option>
                                          <option value="14">14:00</option>
                                          <option value="15">15:00</option>
                                          <option value="16">16:00</option>
                                          <option value="17">17:00</option>
                                          <option value="18">18:00</option>
                                          <option value="19">19:00</option>
                                          <option value="20">20:00</option>
                                          <option value="21">21:00</option>
                                          <option value="22">22:00</option>
                                          <option value="23">23:00</option>
                                          <option value="24">24:00</option>
                                    </select>  
                                    </div>
                              </div>
                      </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                          <button type="submit" onClick={createEmail} className="btn btn-primary ">Send</button>
                    </div>
                 
                  </form>
                </div>
          </div>
      </>
  )
}

export default Create;