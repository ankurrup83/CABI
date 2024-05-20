import React,{useState} from 'react'
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export const HomeSearch = () => {
    const [startDate, setStartDate] = useState(new Date());
    
  return (
    <>
    <div className="homepage-head">
        <div className="homebanner container">   
            <div className="row"> 
                <div className="col-lg-12">
                    <div className='home-searchbar'>
                        <div className="homesearch-feild"> 
                            <label>Trip Type</label>
                            <select name="" id="" className="form-control" required="">
                            <option value="">Drop To Airport</option>
                            <option value="">Drop To Airport</option>
                            <option value="">Drop To Airport</option>
                            </select> 
                        </div>  
                                                    
                        <div className="homesearch-feild">     
                            <label>From</label>                         
                            <input className="form-control" name="" id="" type="text" placeholder="City. Airport. Address or Hotel"/>     
                        </div>

                        <div className="homesearch-feild">  
                            <label>Pickup Date</label> 
                            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            <img src="./assets/home/calender.png" alt="calender"/>
                        </div>   

                        <div className="homesearch-feild">  
                            <label>Pickup Time</label> 
                            
                        </div> 
                            
                        <button type="submit"><img src="./assets/home/search.png" alt="search"/></button>
                    </div>

                    <div className="homehead-heading">
                        <h1>Find Your Drive</h1>
                        <p>Car rentals from trusted, local hosts</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="homehead-content container">  
            <div>
                <label>Unlocking Efficiency and Comfort A Guide to Corporate Travel Essentials</label>
                <p>Phasellus a pellentesque neque. Suspendisse potenti. Donec scelerisque lacus et odio porta, eget porta turpis vulputate. Aliquam in feugiat lacus. Quisque feugiat arcu non metus porttitor, ut rutrum sapien lacinia. Praesent et placerat velit.</p>
            </div>
        </div>

        <img src="./assets/home/homehead-bg.webp" className='search-banner' alt="banner"/>
    </div>
   
    </>
  )
}


