import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faXTwitter,faInstagram,faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
export default function Footer() {
  return (
    <>
    <div className="footer-started">
        <div className="container">   
          <div className="row"> 
                <div className="col-lg-12">
                    <h4 className='heading center-heading'>Get started with CABI</h4>
                </div>  
                  
                <div className="col-lg-6">
                    <div className='getstarted-box'>
                        <img src="./assets/home/getstarted-1.webp" className='img-responsive' alt="get started" />
                        <div className='getstarted-detail'>
                            <h4>Book Airport Ride</h4>
                            <p>Take CABI for a spin now.</p>
                            <Link to={""} className='default-btn'>
                                <div>
                                    <span>Get Started</span>
                                    <span>Get Started</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                  
                <div className="col-lg-6">
                    <div className='getstarted-box'>
                        <img src="./assets/home/getstarted-2.webp" className='img-responsive' alt="get started" />
                        <div className='getstarted-detail'>
                            <h4>Drop From Airport</h4>
                            <p>Connect yourself to CABI now.</p>
                            <Link to={""} className='default-btn'>
                                <div>
                                    <span>Register Now</span>
                                    <span>Register Now</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>

      <footer className="footer">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-lg-4">
                      <div className="footer-logo">
                          <img src="./assets/home/logo.png" alt="Logo"/>
                          <p>At CABI BY SKIL, we are passionate about redefining travel experiences. As a leading travel management company, we specialise in providing tailored solutions for businesses of all sizes. </p>
                      </div> 
                  </div>

                  <div className="col-lg-8">
                      <div className="row">
                          <div className="col-lg-4">
                              <ul className="footer-links">
                                  <li><Link to={"/"}>Home</Link></li>
                                  <li><Link to={"/"}>About Us</Link></li>
                                  <li><Link to={"/"}>Our Fleet</Link></li>
                                  <li><Link to={"/"}>Our Blogs</Link></li>
                                  <li><Link to={"/"}>Contact Us</Link></li>
                              </ul>
                          </div>

                          <div className="col-lg-4">
                              <ul className="footer-links">
                                  <li><Link to={"/"}>My Account</Link></li>
                                  <li><Link to={"/"}>Refund Policy</Link></li>
                                  <li><Link to={"/"}>Payment Security</Link></li>
                                  <li><Link to={"/"}>FAQ’s</Link></li>
                                  <li><Link to={"/"}>Logout</Link></li>
                              </ul>
                          </div>
                          
                          <div className="col-lg-4">
                              <ul className="footer-links">
                                  <li><Link to={"/"}>User Agreement</Link></li>
                                  <li><Link to={"/"}>Travel Policy</Link></li>
                                  <li><Link to={"/"}>Terms & Conditions</Link></li>
                                  <li><Link to={"/"}>Privacy Policy</Link></li>
                              </ul>
                          </div>
                        </div> 
                  </div> 

                  <div className="col-lg-12">
                      <div className="footer-copyright">              
                          <p>© 2024 CABI by SKIL. All Right Reserved.</p>
                          <ul class="footer-social">
                              <li><Link to={"https://www.facebook.com/profile.php?id=100093128929322"} target='_blank'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
                              <li><Link to={"https://www.instagram.com/skiltravel/"} target='_blank'><FontAwesomeIcon icon={faInstagram} /></Link></li>
                              <li><Link to={"https://www.linkedin.com/company/skil-corporate-travel/"} target='_blank'><FontAwesomeIcon icon={faLinkedinIn} /></Link></li>
                              <li><Link to={"https://twitter.com/skil_travel"} target='_blank'><FontAwesomeIcon icon={faXTwitter} /></Link></li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>
      </footer>

    </>
  )
}
