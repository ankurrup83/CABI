import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
export const HomeSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const handleTimeChange = (newValue) => {
    setSelectedTime(newValue);
  };
  const CustomTextField = styled(TextField)({
    "& .MuiInputBase-root": {
      borderRadius: "4px",
      border: "1px solid #ccc",
      padding: "8px",
    },
    "& .MuiInputBase-input": {
      padding: "0",
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "none",
    },
  });
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
                  <input
                    className="form-control"
                    name=""
                    id=""
                    type="text"
                    placeholder="City. Airport. Address or Hotel"
                  />
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
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TimePicker
                        value={selectedTime}
                        onChange={handleTimeChange}
                        renderInput={(params) => (
                          <CustomTextField
                            {...params}
                            variant="outlined"
                            InputProps={{
                              ...params.InputProps,
                              disableUnderline: true,
                            }}
                          />
                        )}
                        ampm={false}
                      />
                    </Box>
                  </LocalizationProvider>
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

        <img
          src="./assets/home/homehead-bg.webp"
          className="search-banner"
          alt="banner"
        />
      </div>
    </>
  );
};
