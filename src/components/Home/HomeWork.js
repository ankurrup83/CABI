import React from 'react'

export const HomeWork = () => {
  return (
    <>
    <div className="home-skilwork">
        <div className="text-center">
            <h4 className='heading skilwork-head'>How SKIL Works</h4>
        </div>
               
        <div className="skilwork-row">
            <div className="container">  
                <div className="row align-items-center"> 
                    <div className="col-lg-7">
                        <div className="skilwork-content">
                            <span>01</span>
                            <h4 className='heading'>Find the perfect car</h4>
                            <p>Enter a location and date and browse thousands of cars shared by local hosts.</p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src="./assets/home/skilwork-1.webp" className='img-responsive' alt="work"/>
                    </div>
                </div>

            </div>

            <img src="./assets/home/skilcar1.webp" className='skilwork-car1' alt="car"/>
        </div>

        <div className="skilwork-row">
            <div className="container">  
                <div className="row align-items-center"> 
                    <div className="col-lg-5">
                        <img src="./assets/home/skilwork-2.webp" className='img-responsive' alt="work"/>
                    </div>

                    <div className="col-lg-7">
                        <div className="skilwork-content skilwork-left">
                            <span>02</span>
                            <h4 className='heading'>Book your trip</h4>
                            <p>Book on the CABI app or online, choose a protection plan, and say hi to your host! Cancel for free up to 24 hours before your trip.</p>
                        </div>
                    </div>
                </div>

            </div>

            <img src="./assets/home/skilcar2.webp" className='skilwork-car2' alt="car"/>
        </div>

        <div className="skilwork-row">
            <div className="container">  
                <div className="row align-items-center"> 
                    <div className="col-lg-7">
                        <div className="skilwork-content">
                            <span>03</span>
                            <h4 className='heading'>Hit The Road</h4>
                            <p>Have the car delivered or pick it up from your host. Check in with the app, grab the keys, and hit the road!</p>
                        </div>
                    </div>

                    <div className="col-lg-5">
                        <img src="./assets/home/skilwork-3.webp" className='img-responsive' alt="work"/>
                    </div>
                </div>

            </div>

            <img src="./assets/home/skilcar3.webp" className='skilwork-car3' alt="car"/>
        </div>
    </div>
    </>
  )
}
