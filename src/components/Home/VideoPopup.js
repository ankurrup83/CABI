import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-bootstrap";

export default function VideoPopup(props) {
  const videoSrc ="https://www.skiltravel.com/website/img/video/SKILTravel.mp4";
    const { onHide } = props;
   
  return (
      <>   
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered className='homevideo-popup'>
        <button onClick={onHide} className="video-close"><img src="./assets/home/pop-close.webp" alt="close"/></button>
        <Modal.Body>
            <video autoPlay loop playsinline>
                <source src={videoSrc} type="video/mp4" />
            </video>
        </Modal.Body>
    </Modal>
    </>
  );
}