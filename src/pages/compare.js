import React, { useEffect, useState } from 'react'
import Header from '../components/common/header'
import SelectCoins from '../components/compare/selectPoint'
import SelectDays from '../components/coin/selectDays';
import { getCoinData } from '../functions/getCoinData';
import { coinObject } from '../functions/coinObject';
import { settingChartData } from '../functions/settingChartData';
import { getCoinPrices } from '../functions/getCoinPrices';
import Loader from '../components/common/loader';
import List from '../components/dashboard/list';
import { get150Coins } from '../functions/get150Coins';
import CoinInfo from '../components/coin/coinInfo';
import LineChart from '../components/coin/LineChart';
import TogglePriceType from '../components/coin/priceType';


function ComparePage() {
  const [allCoins, setAllCoins] = useState([]);
  const [crypto1, setCrypto1] = useState(allCoins[0]?.id ?? "bitcoin");
  const [crypto2, setCrypto2] = useState(allCoins[1]?.id ?? "ethereum");
  const [crypto1Data, setCrypto1Data] = useState();
  const [crypto2Data, setCrypto2Data] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [days, setDays] = useState(30);
  const [priceType, setPriceType] = useState("prices");
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  async function handleDaysChange(event) {
    setIsLoading(true);
    setDays(event.target.value);
    const prices1 = await getCoinPrices(crypto1, event.target.value, priceType);
    const prices2 = await getCoinPrices(crypto2, event.target.value, priceType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  }

  const handlePriceTypeChange = async (e, newType) => {
    setIsLoading(true);
    setPriceType(newType);
    const prices1 = await getCoinPrices(crypto1, days, newType);
    const prices2 = await getCoinPrices(crypto2, days, newType);
    settingChartData(setChartData, prices1, prices2);
    setIsLoading(false);
  };

  const handleCoinChange = async (event, isCoin2) => {
    setIsLoading(true);
    if (isCoin2) {
      setCrypto2(event.target.value);
      const data2 = await getCoinData(event.target.value);
      coinObject(setCrypto2Data, data2);
      const prices1 = await getCoinPrices(crypto1, days, priceType);
      const prices2 = await getCoinPrices(crypto2, days, priceType);
      if (prices1.length > 0 && prices2.length > 0) {
        setIsLoading(false);
      }
    } else {
      setCrypto1(event.target.value);
      const data1 = await getCoinData(event.target.value);
      coinObject(setCrypto1Data, data1);
    }
  };


  console.log("###",crypto1Data);
    console.log("###",crypto2Data);

  useEffect(() => {
    getData();
  }, [])

  async function getData() {
    setIsLoading(true);
    const myCoins = await get150Coins();
    if (myCoins) {
      setAllCoins(myCoins);
    }
    const data1 = await getCoinData(crypto1);
    if (data1) {
      const data2 = await getCoinData(crypto2);
      coinObject(setCrypto1Data, data1);
      if (data2) {
        coinObject(setCrypto2Data, data2);
        const prices1 = await getCoinPrices(crypto1, days, priceType);
        const prices2 = await getCoinPrices(crypto2, days, priceType);
        settingChartData(setChartData, prices1, prices2);
        setIsLoading(false);
      }
    }
  };

  return (
    <div>
      <Header />
      {isLoading ? (<Loader />) : (<>
        <div className='coins-select-flex'>
          <SelectCoins
            allCoins={allCoins}
            crypto1={crypto1}
            handleCoinChange={handleCoinChange}
            crypto2={crypto2}
          />
          <SelectDays
            days={days}
            handleDaysChange={handleDaysChange}
            noPTag={true}
          />
        </div>
        <div className="grey-wrapper">
          <List coin={crypto1Data}></List>
        </div>
        <div className="grey-wrapper">
          <List coin={crypto2Data}></List>
        </div>

        <div className="grey-wrapper">
          <TogglePriceType
            priceType={priceType}
            handlePriceTypeChange={handlePriceTypeChange}
          />
          <LineChart
            chartData={chartData}
            priceType={priceType}
            multiAxis={true}
          />
        </div>

        <CoinInfo heading={crypto1Data.name} desc={crypto1Data.desc} />
        <CoinInfo heading={crypto2Data.name} desc={crypto2Data.desc} />
      </>
      )}
    </div>
  )
}

export default ComparePage
