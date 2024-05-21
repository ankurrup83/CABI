import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";

import { Modal } from "react-bootstrap";

export default function VideoPopup(props) {
  const videoSrc ="https://www.skiltravel.com/website/img/video/SKILTravel.mp4";
    const { onHide } = props;
   
  return (
      <>
          
          <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='login-popup'
    >
     
              <button onClick={onHide}>close</button>
      <Modal.Body>
      <video width="600" autoPlay loop playsinline controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </Modal.Body>
    </Modal>
        
       
        
    </>
  );
}