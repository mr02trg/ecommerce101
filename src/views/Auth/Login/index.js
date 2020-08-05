import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as GoogleIcon } from '../../../assets/icons/google-square-icon.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/icons/facebook-square-icon.svg';

import './style.scss';

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="card">
        <div className="card-header">
          <div className="social-login">
            <GoogleIcon className="social-icon" />
            <FacebookIcon className="social-icon" />
          </div>
          <h3>Sign In</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
              </div>
              <input type="email" className="form-control" placeholder="Email" />
              
            </div>
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning">Login</button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center links">
            Don't have an account?
            <Link className="ml-1" to="/register">Sign Up</Link>
          </div>
          <div className="d-flex justify-content-center">
            <Link to="/forgot-password">Forgot your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;