import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
// import Footer from './Footer';

const App = () => {
  return(
    <div>
      <Header/>
      <div className="row">
        <div className="col-lg-7 col-md-7">
          <img className="img-fluid loginImg" src="../images/Finalimage1.jpg" alt="" /> 
        </div>
        <div className="col-lg-5 col-md-5 loginPart">
          <h2 style={{marginTop:"15%"}}>Welcome to iRMS</h2>
          <div className="fieldset">
            <h4 className="legend">Sign In</h4>
            <div className="form-group">
              <label>Username</label>
              <input type="text" className="form-control" id="" name="username" />
              <div className="pb-1"/>
              <label>Password</label>
              <input type="text" className="form-control" id="" name="password" />
            </div>
            <div className="pt-2"></div>
            <button type="submit" className="btn1">Login</button>
          </div>
          <br/>
          <img className="imgTechnotouch"  src="../images/TTBS.jpg" alt="" /> 
         </div>
      </div> 
      
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));