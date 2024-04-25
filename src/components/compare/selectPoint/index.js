
import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import "./style.css";
import Select from '@mui/material/Select';
import { get150Coins } from '../../../functions/get150Coins';

function SelectCoins({allCoins, crypto1, crypto2, handleCoinChange}) {
    const styles = {
        height: "2.5rem",
        color: "var(--white)",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
        },
        "& .MuiSvgIcon-root": {
            color: "var(--white)",
        },
        "&:hover": {
            "&& fieldset": {
                borderColor: "var(--primary)",
            },
        },
    }

    return (
        <div className='coins-flex'>
            <p>Crypto 1</p>
            <Select
                value={crypto1}
                label="Crypto 1"
                onChange={(event) => handleCoinChange(event, false)}
                sx={styles}
            >
                { allCoins && allCoins.filter((item) => item.id !== crypto2)
                .map((coin, i) =>(
                    <MenuItem key={i} value={coin.id}>
                        {coin.name}
                    </MenuItem>
                ))}
            </Select>

            <p>Crypto 2</p>
            <Select
                value={crypto2}
                label="Crypto 2"
                onChange={(event) => handleCoinChange(event, true)}
                sx={styles}
            >
                {allCoins && allCoins.filter((item) => item.id !== crypto1)
                .map((coin, i) =>(
                    <MenuItem key={i} value={coin.id}>
                        {coin.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}

export default SelectCoins
