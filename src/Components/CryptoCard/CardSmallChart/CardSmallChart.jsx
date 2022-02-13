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
    maintainAspectRatio: false,
    responsive: true,
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
          maxTicksLimit: 13,
          display: false,
        },
        gridLines: {
          display: false,
          color: "#e6e6e6",
          drawBorder: false,
        },
      },
      y: {
        stacked: true,
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
