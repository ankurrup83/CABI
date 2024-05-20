import React from 'react'
import { Link } from 'react-router-dom'

export const HomeVideo = () => {
  return (
    <>
    <section className="honepage-video">
        <div className="home-newvideo-box">
            <div className="home-newvideo-box-play" id="homeplayclik">
                <article> <Link to={""} className="video-play-button"><span></span></Link> </article>
                <h4 className='heading'>Revolutionize Your <br/>Commute with CABI</h4>
            </div>
        </div>
              
        <img src="./assets/home/video-thumb.webp" className='img-responsive' alt="Video"/>

        {/* <div id="videochasingcontentt" className="home-newvideo-box-content" style="display: none;">
            <video id="player" className="parallex-homevideo" autoplay loop playsinline muted>
            <source width="100%" height="555" src="https://www.skiltravel.com/website/img/video/SKILTravel.mp4" type="video/mp4" id="">
            </video>
        </div> */}
    </section> 
    </>
  )
}