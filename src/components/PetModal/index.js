import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Modal from 'react-bootstrap/Modal';
import './style.scss';

const PetModal = ({pet, ...props}) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .required('This field is required'),
    description: Yup.string()
      .required('This field is required'),
    price: Yup.number()
      .nullable()
      .required('This field is required')
      .positive('Invalid price')
      .round('round')
  });

  const save = (formValue) => {
    console.log(formValue);
  };

  return (
    <Modal 
      centered
      size="lg"
      show={props.show} 
      onHide={props.close}>
      <Modal.Header closeButton>
        <Modal.Title>
          {`${pet ? 'Edit' : 'Add'} Pet`}
        </Modal.Title>
      </Modal.Header>
      <Formik
        initialValues={{
          type: '',
          name: '',
          description: '',
          price: null
        }}
        validationSchema={validationSchema}
        onSubmit={values => save(values)}
      >
        <Form>
          <Modal.Body>
            <div className="form-group"></div>
            <div className="form-group">
              <Field type="text" className="form-control" name='name' placeholder="Name"/>
              <ErrorMessage name="name" component="div" className="form-error" />
            </div>
            <div className="form-group">
              <Field component="textarea" type="text" rows="5" className="form-control" name='description' placeholder="Description" />
              <ErrorMessage name="description" component="div" className="form-error" />
            </div>
            <div className="form-group">
              <Field type="number" className="form-control" name='price' placeholder="Price"/>
              <ErrorMessage name="price" component="div" className="form-error" />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit"  className="btn btn-warning">Save</button>
          </Modal.Footer>
        </Form>            
      </Formik>
    </Modal>
  )
}

export default PetModal;
