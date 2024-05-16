import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
export default function LoginModal(props) {
  return (
    <>
       <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='login-popup'
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
    </Modal>
    </>
  )
}
