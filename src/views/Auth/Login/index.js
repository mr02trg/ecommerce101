import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";

import './style.scss';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="card">
        <div className="card-header">
          <h3>Sign In</h3>
          <div className="d-flex justify-content-end social-icon">
            <span><i className="fab fa-facebook-square"></i>
            </span>
            <span><i className="fab fa-google-plus-square"></i>
            </span>
            <span><i className="fab fa-twitter-square"></i>
            </span>
          </div>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faUser} />
                </span>
              </div>
              <input type="text" className="form-control" placeholder="username" />
              
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
              <input type="password" className="form-control" placeholder="password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning">Login</button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?<a className="ml-1" href="#">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;