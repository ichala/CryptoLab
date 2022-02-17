import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJSS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,

  } from 'chart.js';
import { useGetCryptoHistoryQuery } from '../../../ApiCalls/CoinsApi';

ChartJSS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    
  );
function BigChart({sort,id, coinDetails }) {
  const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery({
    coinId: id,
    timeperiod: sort,
  });
  if (isFetching) return 'loading...';
    const coinPrice = [];
    const coinTimestamp = [];
  
    for (let i = coinHistory?.data?.history?.length-1; i >= 0; i-- ) {
      coinPrice.push(coinHistory?.data?.history[i].price);
    }
  
    for (let i = coinHistory?.data?.history?.length-1; i >= 0; i-- ) {
        if (sort==="24h" || sort==="3h") {
          let min=new Date(coinHistory?.data?.history[i].timestamp*1000).getMinutes();
          let hour=new Date(coinHistory?.data?.history[i].timestamp*1000).getHours();
          if (min<10) {
            min ="0"+min;
          } 
          if (hour<10) {
            hour ="0"+hour;
          } 
          coinTimestamp.push(hour+":"+min);
        } else {
          coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp*1000).toLocaleDateString());
        }
     
    }
    const data = {
      labels: coinTimestamp,
      datasets: [
        {
          label: 'USD',
          data: coinPrice,
          backgroundColor: '#f39c12',
          borderColor: '#f39c12',
        },
      
      ],
    };
    const options = { responsive: true,
      maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'top' ,
          },
          title: {
            display: true,
            text: coinDetails?.data?.coin?.symbol+"-USD",
          },
        },
        y: {
      
          ticks: {
            autoSkip: true,
            maxTicksLimit: 60,
            
          },
        },
        x: {
         
          ticks: {
            autoSkip: true,
            maxTicksLimit: 15,
           
          },
        },
      };
    
  return (
    <>
     <Line data={data} options={options} />
    </>
  )
}

export default BigChart