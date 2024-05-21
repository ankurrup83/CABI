import React, { useState,useEffect } from 'react'
export const HomeDestination = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    };
    
    useEffect(() => {
        const canvas = document.getElementById('myCanvas');
        if (!canvas) return; 
    
        let c = canvas.getContext('2d');
        canvas.width = canvas.offsetWidth;
        canvas.height = 200;
    
        let y = canvas.height / 1.1;
        let length = 0.01;
        let amplitude = 10;
        let frequency = 0.03;
        let increment = frequency;
    
        let dots = [
            { percent: 0.143, x: 0, y: 0, direction: 1 },
            { percent: 0.285, x: 0, y: 0, direction: 1 },
            { percent: 0.429, x: 0, y: 0, direction: 1 },
            { percent: 0.571, x: 0, y: 0, direction: 1 },
            { percent: 0.714, x: 0, y: 0, direction: 1 },
            { percent: 0.857, x: 0, y: 0, direction: 1 }
        ];
    
        let sliderX = canvas.width * dots[0].percent - 40;
        let slideTargetX = canvas.width * dots[0].percent - 40;
        let slideEnabled = false;
    
        const calculateDotsPosition = () => {
          for (let dot of dots) {
            dot.x = canvas.width * dot.percent;
            dot.y = y + Math.sin(dot.x * length) * amplitude * Math.sin(increment);
          }
        };
    
        const drawDots = () => {
          for (let dot of dots) {
            c.beginPath();
            c.fillStyle = '#fff';
            c.arc(dot.x, dot.y, 3, 0, Math.PI * 2);
            c.fill();
          }
        };
    
        const animate = () => {
          requestAnimationFrame(animate);
          c.clearRect(0, 0, canvas.width, canvas.height);
    
          c.beginPath();
          c.strokeStyle = 'rgb(255 255 255 / 50%)';
          c.lineWidth = 1;
          c.moveTo(0, y);
    
          for (let i = 0; i < canvas.width; i++) {
            c.lineTo(i, y + Math.sin(i * length) * amplitude * Math.sin(increment));
          }
    
          c.stroke();
    
          calculateDotsPosition();
          drawDots();
    
          c.beginPath();
          c.strokeStyle = '#fff';
          c.lineWidth = 2;
          let ease = 0.08;
          let blueLineLength = 80;
          let blueLineY = y + Math.sin(sliderX * length) * amplitude * Math.sin(increment);
          sliderX += (slideTargetX - sliderX) * ease;
          c.moveTo(sliderX, blueLineY);
          c.lineTo(sliderX + blueLineLength, y + Math.sin((sliderX + blueLineLength) * length) * amplitude * Math.sin(increment));
          c.stroke();
    
          increment += frequency;
        };
    
        const handleCanvasClick = (event) => {
          let clickX = event.clientX - canvas.getBoundingClientRect().left; 
    
            if (clickX >= canvas.width * 0.1 && clickX < canvas.width * 0.2) {
                slideEnabled = true;
                document.getElementById("demo1").click();
                slideTargetX = dots[0].x - 40;
                // document.getElementById("domo1").click();
          } else if (clickX >= canvas.width * 0.25 && clickX < canvas.width * 0.35) {
                slideEnabled = true;
                document.getElementById("demo2").click();
            slideTargetX = dots[1].x - 40;
          } else if (clickX >= canvas.width * 0.4 && clickX < canvas.width * 0.5) {
                slideEnabled = true;
                document.getElementById("demo3").click();
            slideTargetX = dots[2].x - 40;
          } else if (clickX >= canvas.width * 0.5 && clickX <= canvas.width * 0.62) {
                slideEnabled = true;
                document.getElementById("demo4").click();
            slideTargetX = dots[3].x - 40;
          } else if (clickX >= canvas.width * 0.66 && clickX <= canvas.width * 0.76) {
                slideEnabled = true;
                document.getElementById("demo5").click();
            slideTargetX = dots[4].x - 40;
          } else if (clickX >= canvas.width * 0.807 && clickX <= canvas.width * 0.907) {
                slideEnabled = true;
                document.getElementById("demo6").click();
            slideTargetX = dots[5].x - 40;
          }
        };

        canvas.addEventListener('click', handleCanvasClick);
    
        animate();
    
        return () => {
          canvas.removeEventListener('click', handleCanvasClick);
        };
      }, []);
  return (
      <>    
         
        <div className="home-destination">
            <div className="tab-content">
            {activeTab === "tab1" && (
                <div id="tab1" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-hyderabad.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Mumbai</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
            {activeTab === "tab2" && (
                <div id="tab2" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-Bengaluru.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Delhi</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
            {activeTab === "tab3" && (
                <div id="tab3" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-hyderabad.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Bengaluru</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
            
            {activeTab === "tab4" && (
                <div id="tab4" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-Bengaluru.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Chennai</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
                
            {activeTab === "tab5" && (
                <div id="tab5" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-hyderabad.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Kolkata</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
                    
            {activeTab === "tab6" && (
                <div id="tab6" className={`parentclass ${activeTab ? "active" : ""}`}>
                    <img src="./assets/home/location-Bengaluru.webp" className='img-responsive' alt="destination" />
                    <div>
                        <h4 className='heading'>Hyderabad</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est nisl, faucibus eget ultricies et, porta eu augue.</p>
                    </div>
                </div>
            )}
            </div>
            
            <div className="wave-links">
                <div className="desti-tablink">
                    <button id="demo1" onClick={() => handleTabClick("tab1")}>Mumbai</button>
                    <button id="demo2" onClick={() => handleTabClick("tab2")}>Delhi</button>
                    <button id="demo3" onClick={() => handleTabClick("tab3")}>Bengaluru</button>
                    <button id="demo4" onClick={() => handleTabClick("tab4")}>Chennai</button>
                    <button id="demo5" onClick={() => handleTabClick("tab5")}>Kolkata</button>
                    <button id="demo6" onClick={() => handleTabClick("tab6")}>Hyderabad</button>
                </div>
                <canvas id="myCanvas"></canvas>
            </div>
        </div>
      </>
  )
}
