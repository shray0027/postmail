import React from 'react'
import { Route } from "react-router-dom";
import "./App.css"
import Navbar from './components/Navbar'; 
import Create from './components/create';
import History from './components/history';
import Running from './components/running';
import Register from './components/register';
import Login from './components/login';
import Footer from './components/footer';
import Logout from './components/logout';

const App = ()=>{
  return (
    <>
      <Navbar />
      <Route path="/create">
          <Create />
      </Route>
      <Route exact path="/">
          <Login />
      </Route>
      <Route path="/signup">
          <Register />
      </Route>
      <Route path="/running">
          <Running />
      </Route>
      <Route path="/history">
          <History />
      </Route>
      <Route path="/logout">
          <Logout />
      </Route>
      <Footer />
    </>
  )
}

export default App;