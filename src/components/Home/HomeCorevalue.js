import React from 'react'
import Slider from "react-slick";
export const HomeCorevalue = () => {
    var settings2 = {
        dots: true,
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        cssEase: "ease",
      };
  return (
    <>
    <div className="home-corevalue">
        <div className="container">   
            <div className="row"> 

                <div className="col-lg-12">
                    <h4 className='heading'>Our Core Values</h4>

                    <Slider className='corevalue-slider' {...settings2}>
                        <div className="corevalue-box">
                            <img src="./assets/home/corevalue-1.webp" className='img-responsive' alt="value"/>  
                            <div>
                                <h4>Comfort & Competence</h4>
                                <p>At CABI, we prioritise a nurturing work environment for our team and deliver seamless journeys for clients and partners.</p>
                            </div>
                        </div>

                        <div className="corevalue-box">
                            <img src="./assets/home/corevalue-2.webp" className='img-responsive' alt="value"/>  
                            <div>
                                <h4>Availability</h4>
                                <p>Our commitment to global mobility is unwavering, reaching over 132+ countries</p>
                            </div>
                        </div>

                        <div className="corevalue-box">
                            <img src="./assets/home/corevalue-3.webp" className='img-responsive' alt="value"/>  
                            <div>
                                <h4>Best In Class</h4>
                                <p>Striving for excellence, we cultivate internal expertise, swiftly resolving issues</p>
                            </div>
                        </div>

                        <div className="corevalue-box">
                            <img src="./assets/home/corevalue-4.webp" className='img-responsive' alt="value"/>  
                            <div>
                                <h4>Innovation</h4>
                                <p>We leverage Al and inventive algorithms for efficient billing, optimised routes, and reduced dead kilometres.</p>
                            </div>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
