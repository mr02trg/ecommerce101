import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { auth } from 'firebase/utils';
import { addUser } from 'utils/user.helper';

import history from 'history.js';
import { notify, NOTIFICATION_TYPE } from 'utils/notification';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

const RegisterPage = () => {
  const validationSchema = Yup.object({
    surname: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    firstname: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Please enter a valid email address')
      .required('Please enter your email'),
    password: Yup.string()
      .required('Please enter your password')
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
        `Password must Contain:
          - Minimum 6 characters 
          - One uppercase 
          - One lowercase`
      ),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Please confirm your password')
  });

  const register = values => {
    auth.createUserWithEmailAndPassword(values.email, values.password)
        .then(res => {
          if (res?.user) {
            const newUser = {
              uid: res.user.uid,
              email: res.user.email,
              displayName: `${values.firstname} ${values.surname}`,
              role: {
                user: true
              }
            };
            addUser(newUser);
            notify(NOTIFICATION_TYPE.SUCCESS, 'User created successfully');
            history.push('/login');
          }  
        }).catch(error => {
          throw error;
        })
  }

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <div className="card-header">
          <h3>Sign Up</h3>
        </div>
        <div className="card-body">
          <Formik
            initialValues={{
              surname: '',
              firstname: '',
              email: '',
              password: '',
              confirmPassword: ''
            }}
            validationSchema={validationSchema}
            onSubmit={values => register(values)}
          >
            <Form>
              <div className="user-detail">
                <div className="form-group surname">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} />
                      </span>
                    </div>
                    <Field type="text" className="form-control" name="surname" placeholder="Surname" />      
                  </div>
                  <ErrorMessage name="surname" component="div" className="form-error" />
                </div>
                
                <div className="form-group">
                  <Field type="text" className="form-control" name="firstname" placeholder="Firstname" />      
                  <ErrorMessage name="firstname" component="div" className="form-error" />
                </div>
              </div>

              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                  </div>
                  <Field type="email" className="form-control" name="email" placeholder="Email" />      
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
                  <Field type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <ErrorMessage name="password" component="div" className="form-error" />
              </div>
              
              <div className="form-group">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <FontAwesomeIcon icon={faKey} />
                    </span>
                  </div>
                  <Field type="password" className="form-control" name="confirmPassword" placeholder="Confirm Password" />
                </div>
                <ErrorMessage name="confirmPassword" component="div" className="form-error" />
              </div>
              
              <div className="form-group">
                <button type="submit" className="btn btn-warning">Register</button>
              </div>
            </Form>
          </Formik>
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