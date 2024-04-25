import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css"

export default function TogglePriceType({priceType, handlePriceTypeChange}) {
  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
      color="primary"
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      sx={{
        "& .MuiToggleButton-root.Mui-selected": {
          color: "var(--primary)",
          borderColor: "var(--primary)",
        },
        borderColor: "var(--primary)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
          border: "1px solid !important",
          borderColor: "unset",
          color: "var(--primary)",
        },
        "& .MuiToggleButton-standard": {
          color: "var(--primary)",
        },
      }}
    >
      <ToggleButton value="prices" className="toggle-btn">
        Price
      </ToggleButton>
      <ToggleButton value="market_caps" className="toggle-btn">
        Market Cap
      </ToggleButton>
      <ToggleButton value="total_volumes" className="toggle-btn">
        Total
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}