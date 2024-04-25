import React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css"

export default function PaginationComponent({page, handlePageChange}) {

  return (
    <div className='pagination-component'>
      <Pagination 
      count={15} 
      page={page} 
      onChange={(event , value) => handlePageChange(event, value)}
      sx={{
        color:"var(--white)",
        "& .Mui-selected":{
            backgroundColor: "var(--primary) !important",
            color: "#fff !important",
            borderColor:"var(--primary) !important",
        },
        "& .MuiPaginationItem-ellipsis":{
            border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text": {
            color:"var(--white)",
            border:"1px solid var(--grey)",
        },
      }} />
    </div>
  );
}