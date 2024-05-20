import React from 'react'
import Slider from "react-slick";
export const HomeFleet = () => {
    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: false,
        cssEase: "ease",
      };
  return (
    <>
    <div className="homepage-fleet">
        <div className="container">   
            <div className="row"> 

                <div className="col-lg-12 text-center">
                    <h3 className='heading'>Our Fleets</h3>
                    <p className='sub-heading'>Premium car rental at affordable rates. Worldwide.</p>
                </div>

                <div className="col-lg-12">
                    <Slider className='fleet-slider' {...settings}>
                        <div className="homefleet-box">
                            <img src="./assets/home/fleet-1.webp" className='img-responsive' alt="fleet"/>
                            <div className='fleetbox-detail'>    
                                <h4>Maruti Swift Dzire</h4>
                                <div>
                                    <p><img src="./assets/home/fleeticon-1.png" alt="icon"/> 4 Passengers</p>
                                    <p><img src="./assets/home/fleeticon-2.png" alt="icon"/> Air Conditioner</p>
                                    <p><img src="./assets/home/fleeticon-3.png" alt="icon"/> Luggage Carry</p>
                                    <p><img src="./assets/home/fleeticon-4.png" alt="icon"/> Tolls Included</p>
                                </div>
                            </div>
                        </div>

                        <div className="homefleet-box">
                            <img src="./assets/home/fleet-2.webp" className='img-responsive' alt="fleet"/>
                            <div className='fleetbox-detail'>    
                                <h4>Toyota Innova Crysta</h4>
                                <div>
                                    <p><img src="./assets/home/fleeticon-1.png" alt="icon"/> 4 Passengers</p>
                                    <p><img src="./assets/home/fleeticon-2.png" alt="icon"/> Air Conditioner</p>
                                    <p><img src="./assets/home/fleeticon-3.png" alt="icon"/> Luggage Carry</p>
                                    <p><img src="./assets/home/fleeticon-4.png" alt="icon"/> Tolls Included</p>
                                </div>
                            </div>
                        </div>

                        <div className="homefleet-box">
                            <img src="./assets/home/fleet-3.webp" className='img-responsive' alt="fleet"/>
                            <div className='fleetbox-detail'>    
                                <h4>E-Class</h4>
                                <div>
                                    <p><img src="./assets/home/fleeticon-1.png" alt="icon"/> 4 Passengers</p>
                                    <p><img src="./assets/home/fleeticon-2.png" alt="icon"/> Air Conditioner</p>
                                    <p><img src="./assets/home/fleeticon-3.png" alt="icon"/> Luggage Carry</p>
                                    <p><img src="./assets/home/fleeticon-4.png" alt="icon"/> Tolls Included</p>
                                </div>
                            </div>
                        </div>

                        <div className="homefleet-box">
                            <img src="./assets/home/fleet-4.webp" className='img-responsive' alt="fleet"/>
                            <div className='fleetbox-detail'>    
                                <h4>Honda City</h4>
                                <div>
                                    <p><img src="./assets/home/fleeticon-1.png" alt="icon"/> 4 Passengers</p>
                                    <p><img src="./assets/home/fleeticon-2.png" alt="icon"/> Air Conditioner</p>
                                    <p><img src="./assets/home/fleeticon-3.png" alt="icon"/> Luggage Carry</p>
                                    <p><img src="./assets/home/fleeticon-4.png" alt="icon"/> Tolls Included</p>
                                </div>
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
