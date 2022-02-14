import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Filler);
const CardSmallChart = ({ bcolor, color, spark }) => {
  const coinPrice = [];
  for (let i = 0; i < spark?.length; i += 1) {
    coinPrice.push(i);
  }
  const data = {
    labels: coinPrice,
    datasets: [
      {
        label: false,
        data: spark,
        backgroundColor: color,
        borderColor: bcolor,

        pointRadius: false,
        pointColor: "#3b8bba",
        pointStrokeColor: "rgba(60,141,188,1)",
        pointHighlightFill: "#fff",
        pointHighlightStroke: "rgba(60,141,188,1)",
        fill: true,
      },
    ],
  };

  const options = {
    scaleShowLabels: false,
    maintainAspectRatio: true,
    responsive: false,
    
    legend: {
      display: "",
    },
    tooltip: {
      enabled: false,
    },
    scales: {
      x: {
        stacked: true,
        gridLines: {
          drawBorder: false,
          display: false,
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,
          display: false,
        },
        gridLines: {
          display: false,
          
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
        ticks: {
          autoSkip: true,
          maxTicksLimit: 4,
          display: false,
        },
      },
      
    },
  };
  return (
    <>
      <Line data={data} options={options} />
    </>
  );
};

export default CardSmallChart;
