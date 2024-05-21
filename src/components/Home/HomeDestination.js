import React ,{useState} from 'react'
export const HomeDestination = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
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
        
        <div className="desti-tablink">
            <button onClick={() => handleTabClick("tab1")}>Mumbai</button>
            <button onClick={() => handleTabClick("tab2")}>Delhi</button>
            <button onClick={() => handleTabClick("tab3")}>Bengaluru</button>
            <button onClick={() => handleTabClick("tab4")}>Chennai</button>
            <button onClick={() => handleTabClick("tab5")}>Kolkata</button>
            <button onClick={() => handleTabClick("tab6")}>Hyderabad</button>
        </div>
      </div>
      </>
  )
}
