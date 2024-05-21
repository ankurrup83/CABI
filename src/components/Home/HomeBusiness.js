import React from 'react'
import { Link } from 'react-router-dom'

export const HomeBusiness = () => {
  return (
    <>
    <div className="hone-business">
        <div className="container">   
            <div className="row"> 

                <div className="col-lg-12">
                    <div className='skil-business'>
                        <div className="row justify-content-end"> 
                            <div className="col-lg-7 col-md-9">
                                <h4 className='heading'>SKIL For Business</h4>
                                <p>Helping your business move forward, sustainably.</p>
                                <ul className='wow animate__animated animate__bounceIn' data-wow-delay="0.2s" data-wow-duration="1.4s">
                                    <li>
                                        <img src="./assets/home/business-icon-1.png" alt="icon"/>
                                        <span>Effortless Booking</span>
                                        <p>2,000+ Cabi stations in over 105 cities</p> 
                                    </li>
                                    <li>
                                        <img src="./assets/home/business-icon-2.png" alt="icon"/>
                                        <span>Reliability</span>
                                        <p>Enjoy zero ride denials</p> 
                                    </li>
                                    <li>
                                        <img src="./assets/home/business-icon-3.png" alt="icon"/>
                                        <span>Secured Payment</span>
                                        <p>Payment plans with hassle-free accounting</p> 
                                    </li>
                                </ul>
                                <Link to={""} className='default-btn'>
                                    <div>
                                        <span>Get Started</span>
                                        <span>Get Started</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}
