import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import Header from './Header';
import Footer from './Footer';

const App = () => {
  return(
    <div>
      <Header/>
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid" src="../images/frontimg.jpg" alt="" /> 
        </div>
        <div className="col-md-3">
          <h5 style={{marginTop:"22%"}}>Welcome to</h5>
          <h2>IRMS</h2>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" id="" name="username" />
            <div className="pb-1"/>
            <label>Password</label>
            <input type="text" className="form-control" id="" name="password" />
          </div>
          <button type="submit" className="btn1">Login</button>
          <br/>
          <img className="img"  src="../images/foot1.jpg" alt="" /> 
        </div>
      </div>
      <Footer/>
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'));