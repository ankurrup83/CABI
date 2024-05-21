import React from 'react'

export const HomeFeature = () => {
  return (
    <>
    <div className="home-feature">
        <div className="container">   
            <div className="row"> 

                <div className="col-lg-4 col-sm-4">
                    <div className='feature-box wow animate__animated animate__slideInLeft' data-wow-delay="0.2s" data-wow-duration="1.1s">
                        <img src="./assets/home/feature-icon-1.png" alt="icon"/>
                        <span>Global Reach</span>
                        <p>2,000+ Cabi stations in over 105 cities</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                    <div className='feature-box wow animate__animated animate__slideInLeft' data-wow-delay="0.3s" data-wow-duration="1.1s">
                        <img src="./assets/home/feature-icon-2.png" alt="icon"/>
                        <span>Distinctive fleet</span>
                        <p>high-end convertibles to premium SUVs</p>
                    </div>
                </div>

                <div className="col-lg-4 col-sm-4">
                    <div className='feature-box wow animate__animated animate__slideInLeft' data-wow-delay="0.4s" data-wow-duration="1.1s">
                        <img src="./assets/home/feature-icon-3.png" alt="icon"/>
                        <span>Exceptional service</span>
                        <p>Stress-free, trustworthy, no hidden costs</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
