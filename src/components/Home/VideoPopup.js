import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Col, Row } from "react-bootstrap";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

export default function VideoPopup(props) {
  const videoSrc =
    "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  const { open, onCloseVideoModal } = props;
  return (
    <>
      <Modal
        className="video-modal"
        open={open}
        onClose={onCloseVideoModal}
        center
      >
        <video width="600" controls autoPlay>
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Modal>
    </>
  );
}