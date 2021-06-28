import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css"
const History = () => {
  const [mails, setMails] = useState([]);

  useEffect(() => {
    getMails();
  }, []);

  const getMails = async () => {
    const res = await fetch('/history', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data.history);
    setMails(data.history);
  };
  return (
    <div className='outer m-5 w-80'>
      <h2 className="w-75 my-4 mx-auto ">History</h2>
      <table className="w-75 my-4 mx-auto table-striped">
        <tbody>
        <tr className="fw-bold">
        <td >#</td>
        <td>To</td>
        <td colSpan="3">Subject</td>
        <td>Timestamp</td>
        </tr>
          {mails.map((data, index) => (
            <tr className="w-100" key={index}>
              <td>{index + 1}</td>
              <td>{data.to}</td>
              <td colSpan='3'>{data.subject}</td>
              <td>{data.timeStamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;