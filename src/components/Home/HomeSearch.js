import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import TimePicker from "react-time-picker";
export const HomeSearch = () => {
  const [value, setValue] = useState("10:00");
  return (
    <>
      <div className="homepage-head">
        <div className="homebanner container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home-searchbar"></div>

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

        <img
          src="./assets/home/homehead-bg.webp"
          className="search-banner"
          alt="banner"
        />
      </div>

      <TimePicker
        onChange={setValue}
        value={value}
        disableClock={true}
        format="HH:mm"
      />
    </>
  );
};
