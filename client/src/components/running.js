import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css"

const Running = ()=>{
  const [mails,setMails] = useState({});
  const getData = async () => {
    const res = await fetch('/running', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    const mailData = data.currentRequest[0];
   // console.log('Data ====>>>>',mailData);
    setMails(mailData);
  };
  const terminate= async (e)=>{
    e.preventDefault();
    const res = await fetch('/running',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
      
    });
   const data = await res.json();
  }
  useEffect(() => {
    getData();
  }, []);

//  console.log('Mails ===>> ',mails[0])

  return (
    <>
      <div className="outer m-5 w-80">
      <h2 className="w-75 my-4 mx-auto ">CURRENT RUNNING MAIL 📨 📪</h2>
       <table className="w-75 my-4 mx-auto">
       
       <tbody>
 
          <tr className="w-100 first">
           <td className="p-5  fs-5 fw-bold">To</td>
           <td>{mails?mails.to:"No running job"}</td>
           </tr>
           <tr className="w-100 second">
           <td className="p-5 fs-5 fw-bold">Subject:</td>
           <td>{mails?mails.subject:"No running job"}</td>
           </tr>
           <tr className="w-100 third">
             <td className="p-5  fs-5 fw-bold"> Text</td>
             <td >{mails?mails.message:"No running job"}</td>
           </tr>
           <tr className="w-100 four">
             <td className="p-5  fs-5 fw-bold">Schedule:</td>
             <td>{mails?(mails.schedule==="1"?"After every 30 seconds":(mails.schedule==="2"?"On a particular day every week":"On a particular date every month")):"No running job"}</td>
           </tr>
       </tbody>

       </table>
       <form method="POST" className="w-75 my-4 mx-auto terminateForm">
            <input name="el" value="1" className="hidden" />
          <button  type="submit" onClick={terminate}  className="redBtn">{mails?"Terminate":"Nothing to terminate"}</button>
       </form>
    </div>
    </>
  )
}

export default Running;