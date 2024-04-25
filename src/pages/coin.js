import React, { useState } from 'react'
import { useEffect } from 'react';
import Header from '../components/common/header';
import Loader from '../components/common/loader';
import { useParams } from 'react-router-dom';
import { coinObject } from '../functions/coinObject';
import List from '../components/dashboard/list';
import CoinInfo from '../components/coin/coinInfo';
import { getCoinData } from '../functions/getCoinData';
import { getCoinPrices } from '../functions/getCoinPrices';
import LineChart from '../components/coin/LineChart';
import SelectDays from '../components/coin/selectDays';
import { settingChartData } from '../functions/settingChartData';
import axios from 'axios';
import { convertDate } from '../functions/convertDate';
import TogglePriceType from '../components/coin/priceType';
import { NearbyError } from '@mui/icons-material';

function CoinPage() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState();
  const [days, setDays] = useState(30);
  const [chartData, setChartData] = useState({});
  const [priceType, setPriceType] = useState("prices");

  useEffect(() => {
    if (id) {
      getData();
    }
  }, [id]);

  async function getData() {
    const data = await getCoinData(id);
    if (data) {
      coinObject(setCoinData, data);
      const prices = await getCoinPrices(id, days, priceType);
      if (prices.length > 0) {
        settingChartData(setChartData, prices);
        setIsLoading(false);
      }
    }
  }

  const handleDaysChange = async (event) => {
    setIsLoading(true);
    setDays(event.target.value);
    const prices = await getCoinPrices(id, event.target.value, priceType);
    if (prices.length > 0) {
      settingChartData(setChartData, prices);
      setIsLoading(false);
    }
  };

  const handlePriceTypeChange = async (event, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices = await getCoinPrices(id, days, newType);
    if (prices) {
      settingChartData(setChartData, prices);
    }
    setIsLoading(false);
  };


  return (
    <div>
      <Header />
      {isLoading ? <Loader /> : <>
        <div className="grey-wrapper">
          <List coin={coinData} />
        </div>
        <div className="grey-wrapper">
          <SelectDays days={days} handleDaysChange={handleDaysChange} />
          <TogglePriceType priceType={priceType} handlePriceTypeChange={handlePriceTypeChange} />
          <LineChart chartData={chartData} priceType={priceType}  />
        </div>
        <CoinInfo heading={coinData.name} desc={coinData.desc} />
      </>}
    </div>
  )
}

export default CoinPage;


// function CoinPage() {
//   const { id } = useParams();
//   const [isLoading, setIsLoading] = useState(true);
//   const [coinData, setCoinData] = useState();
//   const [days, setDays] = useState(30);
//   const [chartData, setChartData] = useState({})


//   useEffect(() => {
//     if (id) {
//       getData();
//     }
//   }, [id]);

//   async function getData() {
//     const data = await getCoinData(id);
//     if (data) {
//       coinObject(setCoinData, data);
//     }

//   }

//   const handleDaysChange = async (event) => {
//     setIsLoading(true);
//     setDays(event.target.value);
//     const prices = await getCoinPrices(id, event.target.value);
//     if (prices.length > 0) {
//       settingChartData(setChartData, prices);
//       setIsLoading(false);
//     }
//   };


//   return (
//     <div>
//       <Header />
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <div className='grey-wrapper' style={{ padding: "0rem 1rem" }}>
//             <List coin={coinData} />
//           </div>
//           <div className='grey-wrapper'>
//             <SelectDays days={days} handleDaysChange={handleDaysChange} />
//             <LineChart chartData={chartData} />
//           </div>
//           <CoinInfo heading={coinData.name} desc={coinData.desc} />
//         </>
//       )}
//     </div>
//   )
// }

// export default CoinPage;

