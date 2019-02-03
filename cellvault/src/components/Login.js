import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="form-box">
               <div class="head"> Cellvault Admin</div>
                    <form action="#" id="login-form">
                        <div class="form-group">
                        <label class="label-control">
                              <span class="label-text"></span>
                         </label> 
                       <input type="text" placeholder="username" class="form-control" onChange={this.handleChange} />
                        </div>
                        <div class="form-group">
                          <label class="label-control">
                              <span class="label-text"></span>
                         </label> 
                        <input type="password" placeholder="password" class="form-control"  onChange={this.handleChange} />
                        </div>
                        <input
                            value="SUBMIT"
                            type="submit"
                            class="btn"
                        />
                        
                    </form>
                    
                
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;