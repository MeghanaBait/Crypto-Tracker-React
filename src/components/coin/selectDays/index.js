import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./style.css";
import Select from '@mui/material/Select';

export default function SelectDays({days, handleDaysChange, noPTag}) {
  return (
    <div className='select-days'>
        {!noPTag && <p>Price Change In</p>}
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
          sx={{
            height:"2.5rem",
            color: "var(--white)",
            "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--white)",
            },
            "& .MuiSvgIcon-root":{
                color:"var(--white)",
            },
            "&:hover":{
                "&& fieldset":{
                    borderColor:"var(--primary)",
                },
            },
          }}
        >
          <MenuItem value={7}>1 Week</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
    </div>
  );
}