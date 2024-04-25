import { TrendingUp } from "@mui/icons-material";
import { convertDate } from "./convertDate";

export const settingChartData = (setChartData, prices1, prices2) => {
  console.log("****price 2", prices2);
  if(prices2){
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          label:"Crypto 1",
          data: prices1.map((price) => price[1]),
          borderWidth: 1,
          fill: true,
          tension: 0.25,
          borderColor: "#865DFF",
          backgroundColor: prices2 ? "transparent" : "rgba(58, 128, 233,0.1)",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
        {
          label:"Crypto 2",
          data: prices2.map((price) => price[1]),
          borderWidth: 1,
          fill: TrendingUp,
          tension: 0.25,
          borderColor: "#61c96f",
          backgroundColor: prices2 ? "transparent" : "rgba(97, 201, 111,0.1)",
          pointRadius: 0,
          yAxisID: "crypto2",
        },
        
      ]
    });
  }
  else{
    setChartData({
      labels: prices1.map((price) => convertDate(price[0])),
      datasets: [
        {
          data: prices1.map((price) => price[1]),
          borderWidth: 2,
          fill: true,
          tension: 0.25,
          borderColor: "#865DFF",
          backgroundColor: "#865DFF20",
          pointRadius: 0,
          yAxisID: "crypto1",
        },
      ]
    });
  }
 
}