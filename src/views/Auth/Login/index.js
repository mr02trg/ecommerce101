import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, GoogleProvider } from 'firebase/utils';
import { addUser } from 'firebase/user';
import { useRecoilState } from 'recoil';
import userAtom from 'atoms/userAtom';
import { saveUserToStorage } from 'utils/persistUser';

import history from 'history.js';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as GoogleIcon } from 'assets/icons/google-square-icon.svg';
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook-square-icon.svg';

import './style.scss';

const LoginPage = () => {

  const [, setUser] = useRecoilState(userAtom);

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
  });

  const handleUserLogin = userData => {
    saveUserToStorage(userData);
    setUser(userData);
  }

  useEffect(() => {
    auth.getRedirectResult().then(res => {
      if (res?.user) {
        const signedInUser = {
          uid: res.user.uid,
          displayName: res.user.displayName,
          email: res.user.email,
          accessToken: res.credential.accessToken
        }
        addUser(signedInUser);
        handleUserLogin(signedInUser)
        history.push('/');
      }
    }).catch(error => {
      console.log(error);
    });
  }, []);

  const login = values => {
    console.log(values);
  }

  const loginWithGoogle = () => {
    auth.signInWithRedirect(GoogleProvider);
  }

  return (
    <div className="login-wrapper">
      <div className="card">
        <div className="card-header">
          <div className="social-login">
            <GoogleIcon className="social-icon" onClick={loginWithGoogle} />
            <FacebookIcon className="social-icon" />
          </div>
          <h3>Sign In</h3>
        </div>
        <div className="card-body">
          <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            validationSchema={validationSchema}
            onSubmit={values => login(values)}
          >
            <Form>
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <Field type="email" className="form-control" name='email' placeholder="Email"/>
                </div>
                <ErrorMessage name="email" component="div" className="form-error" />
              </div>
              
              <div className="form-group">
                <div className="input-group ">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </div>
                  <Field type="password" className="form-control" name='password' placeholder="Password" />
                </div>
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>
              <div className="form-group">
                <button type="submit"  className="btn btn-warning">Login</button>
              </div>
            </Form>            
          </Formik>
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