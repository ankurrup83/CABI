import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const HomeSearch = () => {
  const [startTime, setStartTime] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="homepage-head">
        <div className="homebanner container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-searchbar">
                <div className="homesearch-feild">
                  <label>Trip Type</label>
                  <select name="" id="" className="form-control" required="">
                    <option value="">Choose Trip Type</option>
                    <option value="">Drop To Airport</option>
                    <option value="">Pickup from Airport</option>
                  </select>
                </div>

                <div className="homesearch-feild">
                  <label>From</label>
                  <input className="form-control" type="text" placeholder="City. Airport. Address or Hotel" />
                </div>

                <div className="homesearch-feild">
                  <label>Pickup Date</label>
                  <div class="input-group">
                    <DatePicker
                      className="form-control"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                    <span class="input-group-addon">
                      <img src="./assets/home/calender.png" alt="calender" />
                    </span>
                  </div>
                </div>

                <div className="homesearch-feild seach-timepick">
                  <label>Pickup Time</label>
                  <DatePicker className="form-control"
                    selected={startTime}
                    onChange={(time) => setStartTime(time)}
                    locale="pt-BR"
                    showTimeSelect
                    showTimeSelectOnly
                    timeFormat="HH:mm"
                    timeIntervals={5}
                    timeCaption="Time"
                    dateFormat="HH:mm"
                  />
                </div>

                <button className="search-butn" type="submit">
                  <img src="./assets/home/search.png" alt="search" />
                </button>
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
            <label>
              Unlocking Efficiency and Comfort A Guide to Corporate Travel
              Essentials
            </label>
            <p>
              Phasellus a pellentesque neque. Suspendisse potenti. Donec
              scelerisque lacus et odio porta, eget porta turpis vulputate.
              Aliquam in feugiat lacus. Quisque feugiat arcu non metus
              porttitor, ut rutrum sapien lacinia. Praesent et placerat velit.
            </p>
          </div>
        </div>

        <img src="./assets/home/homehead-bg.webp" className="search-banner" alt="banner"/>
      </div>
    </>
  );
};