import React, { Component } from "react"
import { Route, Link, Routes } from "react-router-dom"
import reduxLogo from "./logo.svg"
import "./App.css"
import  Students  from "./components/Students"
import  StudentForm  from "./components/StudentForm"

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
            <div className="lapp-header-title">
              <h1>React Redux CRUD sample with Axios</h1>
              <img src={reduxLogo} className="App-logo" alt="redux logo" />
            </div>
            <div>
              <Link to="/">Home</Link> | 
              <Link to="/students/new">New Student</Link> | 
            </div>
            <Routes>
              <Route exact path="/" component={Students}/>
              <Route exact path="/students/new" component={StudentForm}  />
              <Route exact path="/students/edit/:id" component={StudentForm}  />
              <Route path="/students/:id" component={Students} />
          </Routes>
          
        </div>
      </div>
    );
  }
}


export default App