import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth, GoogleProvider } from 'firebase/utils';
import { addUser, getUser, saveUserToStorage } from 'utils/user.helper';
import { useRecoilState } from 'recoil';
import userAtom from 'atoms/userAtom';

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

  const loginRedirect = user => {
    if(user?.role['admin']) {
      history.push('/dashboard');
    } else {
      history.push('/');
    }
  }

  const handleUserLogin = loginResponse => {
    if (loginResponse?.user) {
      getUser(loginResponse.user.uid).then(doc => {
        let signedInUser;
        if (doc.exists) {
          const user = doc.data();
          signedInUser = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            role: user.role
          };
          saveUserToStorage(signedInUser);
          setUser(signedInUser);
        }
        else {
          // add user to firestore
          signedInUser = {
            uid: loginResponse.user.uid,
            displayName: loginResponse.user.displayName,
            email: loginResponse.user.email,
            role: {
              user: true
            }
          };
          addUser(signedInUser);
          saveUserToStorage(signedInUser);
          setUser(signedInUser);
        }

        loginRedirect(signedInUser);
      })
    }
  }

  useEffect(() => {
    auth.getRedirectResult().then(res => {
      handleUserLogin(res);
    }).catch(error => {
      throw error;
    });
  }, []);

  const login = values => {
    auth.signInWithEmailAndPassword(values.email, values.password).then(res => {
      handleUserLogin(res);
    }).catch(error => {
      throw error;
    })
  }

  const loginWithGoogle = () => {
    auth.signInWithRedirect(GoogleProvider);
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">
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