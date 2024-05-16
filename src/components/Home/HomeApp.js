import React from 'react'
import { Link } from 'react-router-dom'

export const HomeApp = () => {
  return (
    <>
    <div className="home-skilapp">
        <div className="container">   
            <div className="row align-items-center"> 
                <div className="col-lg-6">
                <div className="skilapp-content">
                        <h4 className='heading'><span>Download our app</span> from the App Store & Google Play</h4>
                        <p>Accumsan pulvinar turpis, in vehicula dolor molestie eget. Sed tristique, neque et efficitur euismod, diam magna tempor tortor, vitae varius est ante quis libero.</p>
                        <ul>
                            <li><img src="./assets/home/app-qrcode.webp" alt="QR"/></li>
                            <li><Link to={""}><img src="./assets/home/google-app.png" alt="app"/></Link></li>
                            <li><Link to={""}><img src="./assets/home/apple-app.png" alt="app"/></Link></li>
                        </ul>
                    </div>
                </div>

                <div className="col-lg-6">
                    <img src="./assets/home/skilapp.webp" className='img-responsive' alt="app"/>
                </div>
            </div>
        </div>

        <img src="./assets/home/skilapp-pattern.webp" className='skilapp-vector' alt="app"/>
    </div>
    </>
  )
}
