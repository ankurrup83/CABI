import React,{useEffect} from 'react'

export const HomeWork = () => {
    // useEffect(() => {
    //     const fillPath = document.getElementById('fillPath');
    //     const pathLength = fillPath.getTotalLength();
    
    //     // Initialize fill path style
    //     fillPath.style.strokeDasharray = pathLength;
    //     fillPath.style.strokeDashoffset = pathLength;
    
    //     const handleScroll = () => {
    //       const container = document.querySelector('.one-sec');
    //       if (!container) return;  // Exit if the container is not found
    
    //       const containerRect = container.getBoundingClientRect();
    //       const windowHeight = window.innerHeight;
    
    //       // Calculate the scroll progress inside the container
    //       const scrollProgress = Math.min(Math.max((windowHeight - containerRect.top) / (containerRect.height + windowHeight), 0), 1);
    
    //       // Update the dash offset based on scroll progress
    //       fillPath.style.strokeDashoffset = pathLength * (1 - scrollProgress);
    //     };
    
    //     window.addEventListener('scroll', handleScroll);
    
    //     // Cleanup event listener on component unmount
    //     return () => {
    //       window.removeEventListener('scroll', handleScroll);
    //     };
    //   }, []);
    
  return (
    <>
    <div className="home-skilwork">
        <div className="text-center">
            <h4 className='heading skilwork-head'>How SKIL Works</h4>
        </div>
               
        <div className="skilwork-row">
            <div className="container">  
                <div className="row align-items-center"> 
                    <div className="col-lg-7 col-md-6">
                        <div className="skilwork-content wow animate__animated animate__slideInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <span>01</span>
                            <h4 className='heading'>Find the perfect car</h4>
                            <p>Enter a location and date and browse thousands of cars shared by local hosts.</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                        <img src="./assets/home/skilwork-1.webp" className='img-responsive' alt="work"/>
                    </div>
                </div>
            </div>

            <img src="./assets/home/skilcar1.webp" className='skilwork-car1' alt="car"/>
        </div>

        <div className="skilwork-row one-sec">
            <div className="container">  
                <div className="row align-items-center"> 
                    <div className="col-lg-5 col-md-6 order-2 order-lg-1 order-md-1">
                        <img src="./assets/home/skilwork-2.webp" className='img-responsive' alt="work"/>
                    </div>

                    <div className="col-lg-7 col-md-6 order-1 order-lg-2 order-md-2">
                        <div className="skilwork-content skilwork-left wow animate__animated animate__slideInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
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
                    <div className="col-lg-7 col-md-6">
                        <div className="skilwork-content wow animate__animated animate__slideInUp" data-wow-delay="0.1s" data-wow-duration="1.1s">
                            <span>03</span>
                            <h4 className='heading'>Hit The Road</h4>
                            <p>Have the car delivered or pick it up from your host. Check in with the app, grab the keys, and hit the road!</p>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-6">
                        <img src="./assets/home/skilwork-3.webp" className='img-responsive' alt="work"/>
                    </div>
                </div>
            </div>

            <img src="./assets/home/skilcar3.webp" className='skilwork-car3' alt="car"/>
        </div>

        {/* <div className="line-container">
            <svg viewBox="0 0 1020 1699" fill="none" preserveAspectRatio="xMidYMax meet">
                <path
                id="dashedPath"
                d="M-7 1C100.193 24.3275 292.267 144.902 203.012 440.578C91.4429 810.174 839.5 617.5 979.5 771C991.833 787.5 1055 859.5 966.5 952.5C880.833 1049.17 720.3 1166.1 723.5 1260.5C727.5 1378.5 692 1541.5 504.5 1555.5C317 1569.5 228.5 1490.5 208 1698"
                stroke="rgba(255, 255, 255)"
                strokeWidth="4"
                strokeDasharray="10 10"
                fill="none"
                />
                <path
                id="fillPath"
                d="M-7 1C100.193 24.3275 292.267 144.902 203.012 440.578C91.4429 810.174 839.5 617.5 979.5 771C991.833 787.5 1055 859.5 966.5 952.5C880.833 1049.17 720.3 1166.1 723.5 1260.5C727.5 1378.5 692 1541.5 504.5 1555.5C317 1569.5 228.5 1490.5 208 1698"
                stroke="rgba(255, 255, 255)"
                strokeWidth="4"
                fill="none"
                />
            </svg>
        </div> */}
    </div>
    </>
  )
}
