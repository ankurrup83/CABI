import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import VideoPopup from './VideoPopup';
export const HomeVideo = () => {
  const [openModal, setOpenModal] = useState(false);
  const onCloseVideoModal = () => {
    setOpenModal(false)
  }
  return (
    <>
    <section className="honepage-video">
        <div className="home-newvideo-box">
            <div className="home-newvideo-box-play">
                <article> <Link to={""} className="video-play-button" onClick={() => setOpenModal(true)}><span></span></Link> </article>
                <h4 className='heading'>Revolutionize Your <br/>Commute with CABI</h4>
            </div>
        </div>
              
        <img src="./assets/home/video-thumb.webp" className='img-responsive' alt="Video"/>
    </section> 
      
      {openModal ? (
        <VideoPopup show={openModal}  onHide={() => setOpenModal(false)}/>
      ) : (
        ""
      )}
    </>
  )
}
