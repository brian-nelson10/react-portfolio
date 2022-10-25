import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { validateEmail } from '../../utils/helpers';

function ContactButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!errorMessage) {
        setFormState({ [e.target.name]: e.target.value });
        console.log('Form', formState);
      }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
      };

    return (
        <>
        <Button onClick={handleShow} variant="light outline-light" size="lg" className="fw-bold js-explode" style={{fontFamily: "Rock Salt"}}>Drop a Line</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Body className="text-center" style={{fontFamily:"Passion One", fontSize: "300%"}}>Send me a Message</Modal.Body>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
        <div>
            <Form.Group className='mb-3' controlId='formBasicName'>
          <Form.Label style={{fontFamily: 'Rock Salt'}} htmlFor="name">Name:</Form.Label>
          <Form.Control type="text" name="name" defaultValue={name} onBlur={handleChange} />
          </Form.Group>
        </div>
        <div>
            <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label style={{fontFamily: 'Rock Salt'}} htmlFor="email">Email address:</Form.Label>
          <Form.Control type="email" name="email" defaultValue={email} onBlur={handleChange} />
          </Form.Group>
        </div>
        <div>
            <Form.Group className='mb-3' controlId='formBasicMessage'>
          <Form.Label style={{fontFamily: 'Rock Salt'}} htmlFor="message">Message:</Form.Label>
          <Form.Control name="message" rows="5" defaultValue={message} onBlur={handleChange} />
          </Form.Group>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        
        </Form>
        <Modal.Body className='text-center' style={{fontFamily: 'Passion One', fontSize:'300%'}}>Thank you for looking!</Modal.Body>
        <Modal.Footer className='justify-content-center'>
          <Button variant="light outline-dark" size="lg" className="fw-bold" style={{fontFamily: 'Rock Salt'}} onClick={handleClose}>
            Maybe Later..
          </Button>
          <Button variant="light outline-light" size="lg" className="fw-bold" style={{fontFamily: 'Rock Salt'}} onClick={handleClose}>
            Submit!
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    );
}

export default ContactButton;