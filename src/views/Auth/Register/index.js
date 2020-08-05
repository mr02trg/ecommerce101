import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";

import './style.scss';

const RegisterPage = () => {
  return (
    <div className="register-wrapper">
      <div className="card">
        <div className="card-header">
          <h3>Sign Up</h3>
        </div>
        <div className="card-body">
          <form>
            <div className="form-group user-detail">
              <div className="input-group surname">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                </div>
                <input type="text" className="form-control" placeholder="Surname" />      
              </div>
              <div className="firstname">
                <input type="text" className="form-control" placeholder="Firstname" />      
              </div>
            </div>
            
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
            <div className="input-group form-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon={faKey} />
                </span>
              </div>
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-warning">Register</button>
            </div>
          </form>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-center">
            <Link to="/login">Back to login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;