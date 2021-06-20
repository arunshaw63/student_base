import React,{useState,useEffect} from 'react'
import logo from '../../assets/logo.svg';
import {useFirebase} from 'react-redux-firebase';
import { useHistory } from 'react-router-dom';

function Login() {
    const firebase=useFirebase();
    const history=useHistory();

    const [user,setUser] =useState({
        password:"",
        email:""        
         });
    const onInputChange=e=> {
            setUser({...user,[e.target.name] : e.target.value});
            }            
    const {email, password}=user;

    const submitForm=async e=>{
        e.preventDefault();
        await firebase.login(user);
        history.push("/");
    }
    return (
        <div>
            <div className="container">
  <div className="py-5">
    <div className="row mt-5">
      <div className="col-md-4 offset-md-4">
        <div className="card shadow">
          <div className="card-body">
          <img
            src={logo}
            height="30px"
            alt="logo"
            className="card-img-top mb-5" height="75px"
          />
            <form onSubmit={submitForm}>
              <div className="form-group">
                <input   
                onChange={onInputChange} 
                name="email" className="form-control" 
                placeholder="Enter Your E-mail" 
                value={email} />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter Your Password"
                  value={password}
                  onChange={onInputChange}
                />
              </div>
              <button className="btn btn-primary btn-block">
                Login to dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default Login
