import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import PetAvatar from 'components/PetAvatar';
import './style.scss';

const PetModal = ({pet, ...props}) => {
  const validationSchema = Yup.object({
    type: Yup.string()
      .required('This field is required')
      .oneOf(['dog', 'cat', 'bird'], 'Invalid pet type'),
    name: Yup.string()
      .required('This field is required'),
    description: Yup.string()
      .required('This field is required'),
    price: Yup.number()
      .required('This field is required')
      .positive('Invalid price')
      .round('round'),
    avatarUrl: Yup.string()
      .required('This field is required')
  });

  return (
    <Modal 
      centered
      size="lg"
      show={props.show} 
      onHide={props.close}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {`${pet ? 'Edit' : 'Add'} Pet`}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          type: 'dog',
          name: '',
          description: '',
          avatarUrl: '',
          price: undefined
        }}
        validationSchema={validationSchema}
        onSubmit={values => props.close(values)}
      >
        {({values, isSubmitting, setSubmitting, setFieldValue}) => (
          <Form>
            <Modal.Body>
              <div className="d-flex justify-content-between">
                <div className="d-flex pl-2 pr-4 justify-content-around align-items-center">
                  <PetAvatar 
                    petType={values.type} 
                    loading={isSubmitting} 
                    setLoading={loadingStatus => setSubmitting(loadingStatus)}
                    setAvatar={url => setFieldValue('avatarUrl', url)}
                  />
                </div>
                <div className="flex-grow-1">
                  <div className="form-group">
                    <div className= "d-flex align-items-center">
                      <label className="mb-0 mr-3">Pet Type:</label>
                      <div className="form-check form-check-inline">
                        <Field className="form-check-input" type="radio" name="type" value="dog" disabled={isSubmitting} />
                        <label className="form-check-label">Dog</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field className="form-check-input" type="radio" name="type" value="cat" disabled={isSubmitting} />
                        <label className="form-check-label">Cat</label>
                      </div>
                      <div className="form-check form-check-inline">
                        <Field className="form-check-input" type="radio" name="type" value="bird" disabled={isSubmitting} />
                        <label className="form-check-label">Bird</label>
                      </div>
                    </div>
                    <ErrorMessage name="type" component="div" className="form-error" />
                  </div>
                  <div className="form-group">
                    <label>Name</label>
                    <Field type="text" className="form-control" name='name'/>
                    <ErrorMessage name="name" component="div" className="form-error" />
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <Field component="textarea" type="text" rows="5" className="form-control" name='description' label="Description" />
                    <ErrorMessage name="description" component="div" className="form-error" />
                  </div>
                  <div className="form-group">
                    <label>Price</label>
                    <Field type="number" className="form-control" name='price' />
                    <ErrorMessage name="price" component="div" className="form-error" />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="submit" className="btn btn-warning" disabled={isSubmitting}>Save</button>
            </Modal.Footer>
          </Form>  
        )}          
      </Formik>
    </Modal>
  )
}

export default PetModal;
