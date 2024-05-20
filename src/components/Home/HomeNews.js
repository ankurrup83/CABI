import React from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
export const HomeNews = () => {
    var settings3 = {
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
    <div className="home-newsupdate">
        <div className="container">   
            <div className="row"> 

                <div className="col-lg-12">
                    <div className='newsupdate-head'>
                        <h4 className='heading'>News and updates</h4>
                        <Link to={""} className='default-btn'>
                            <div>
                                <span>View All</span>
                                <span>View All</span>
                            </div>
                        </Link>
                    </div>

                    <Slider className='newsupdate-slider' {...settings3}>
                        <div className="newsupdate-box">
                            <Link to={""}>
                                <div className="newsupdate-inner">
                                    <img src="./assets/home/newspost-2.webp" className='img-responsive' alt="News"/>  
                                    <div>
                                        <h4>7 Tips For Eco-Friendly Sustainable Travel Business Trips</h4>
                                        <Link to={""}>Read More</Link>
                                    </div>
                                </div>
                                <span>Technology</span>
                            </Link>
                        </div>

                        <div className="newsupdate-box">
                            <Link to={""}>
                                <span>Security</span>
                                <div className="newsupdate-inner">
                                    <img src="./assets/home/newspost-3.webp" className='img-responsive' alt="News"/>  
                                    <div>
                                        <h4>11 Tips To Plan An Unforgettable Office Holiday Party</h4>
                                        <Link to={""}>Read More</Link>
                                    </div>
                                </div>

                            </Link>
                        </div>
                       
                        <div className="newsupdate-box">
                            <Link to={""}>
                                <div className="newsupdate-inner">
                                    <img src="./assets/home/newspost-1.webp" className='img-responsive' alt="News"/>  
                                    <div>
                                        <h4>innovative idea and business model disrupts the mobility Industry</h4>
                                        <Link to={""}>Read More</Link>
                                    </div>
                                </div>
                                <span>Technology</span>
                            </Link>
                        </div>
                    </Slider>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
