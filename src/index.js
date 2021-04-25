import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';



class App extends Component {
    render(){
        return(
            <div>
                <center>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <h2>Dashboard-Office/Home</h2>
                        <hr/>
                    </div>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <br/>
                                <div className="form-group">
                                    <h3>Reception Area 1 Light</h3>
                                </div>
                                <div className="form-group">
                                    <h3>Building Common Area Light</h3>
                                </div>
                                <div className="form-group">
                                    <h3>Reception Area 1 Light</h3>
                                </div>
                                <div className="form-group">
                                    <h3>AC control</h3>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <h3>Water Motor/Pump</h3>
                                </div>
                            </div>    
                            <div className="row">
                                <div className="col-md-6">
                                    <br/>
                                    <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                    </label>
                                    <br/>
                                    <br/>
                                    <label class="switch">
                                    <input type="checkbox"/>
                                    <span class="slider round"></span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <button type="button" class="btn btn-outline-dark">Start timer</button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <hr/>
                    <p>&copy; TechnoTouch Business Solutions </p>
                </center> 
            </div>
            
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));



//<label class="switch">
//<input type="checkbox"/>
//<span class="slider round"></span>
//</label>
