import axios from "axios";

export const get150Coins = () => {
  const myCoins =  axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=150&page=1&sparkline=false&locale=en"
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error>>>", error);
    });
    return myCoins;
};