import React from 'react'
import Slider from "react-slick";
export const HomeTestimonial = () => {
    var settings3 = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        //centerMode: true,
        autoplay: true,
        pauseOnHover: false,
        cssEase: "ease",
        responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow:2,
            }
        },  
    
        {
            breakpoint: 767,
            settings: {
            slidesToShow:1,
            }
        },  
    
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            }
        }
        ]
      };
  return (
    <>
    <div className="home-testimonial">
        <div className="container">   
            <div className="row"> 
                <div className="col-lg-12 text-center">
                    <h4 className='heading center-haeding'>They have adopted <br />the <span>CABI</span> model</h4>
                </div>
                      
                      <div className="col-lg-12">
                      <div className="">
                    <Slider className='testimonial-slider' {...settings3}>
                        <div className="testimonial-box">
                            <h4>Jubin</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue. Sed mi velit, auctor nec rutrum a, placerat sed nulla. Donec mauris ipsum, gravida at egestas et, lacinia eget ex. Maecenas nulla massa, fermentum eget semper ut, efficitur fringilla mauris. Fusce rhoncus placerat tortor, et hendrerit mi. Proin interdum egestas quam, mollis laoreet est maximus.</p>
                            <span>12 May, 2024</span>
                        </div>
                        
                        <div className="testimonial-box">
                            <h4>Radhika</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue. Sed mi velit, auctor nec rutrum a, placerat sed nulla. Donec mauris ipsum, gravida at egestas et, lacinia eget ex. Maecenas nulla massa, fermentum eget semper ut, efficitur fringilla mauris. Fusce rhoncus placerat tortor, et hendrerit mi. Proin interdum egestas quam, mollis laoreet est maximus.</p>
                            <span>12 May, 2024</span>
                        </div>      

                        <div className="testimonial-box">
                            <h4>Abhishek</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue. Sed mi velit, auctor nec rutrum a, placerat sed nulla. Donec mauris ipsum, gravida at egestas et, lacinia eget ex. Maecenas nulla massa, fermentum eget semper ut, efficitur fringilla mauris. Fusce rhoncus placerat tortor, et hendrerit mi. Proin interdum egestas quam, mollis laoreet est maximus.</p>
                            <span>12 May, 2024</span>
                        </div>     

                        <div className="testimonial-box">
                            <h4>Simram</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue. Sed mi velit, auctor nec rutrum a, placerat sed nulla. Donec mauris ipsum, gravida at egestas et, lacinia eget ex. Maecenas nulla massa, fermentum eget semper ut, efficitur fringilla mauris. Fusce rhoncus placerat tortor, et hendrerit mi. Proin interdum egestas quam, mollis laoreet est maximus.</p>
                            <span>12 May, 2024</span>
                        </div> 

                        <div className="testimonial-box">
                            <h4>Misha</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue. Sed mi velit, auctor nec rutrum a, placerat sed nulla. Donec mauris ipsum, gravida at egestas et, lacinia eget ex. Maecenas nulla massa, fermentum eget semper ut, efficitur fringilla mauris. Fusce rhoncus placerat tortor, et hendrerit mi. Proin interdum egestas quam, mollis laoreet est maximus.</p>
                            <span>12 May, 2024</span>
                        </div>       
                              </Slider>
                              </div>
                </div>

            </div>
        </div>
    </div>

    </>
  )
}
