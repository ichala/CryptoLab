import millify from 'millify'
import React, { useState } from 'react'
import {useGetCoinsQuery,useGetCryptoHistoryQuery } from "../../ApiCalls/CoinsApi"
import CardSmallChart from './CardSmallChart/CardSmallChart';
function CryptoCard({simplified}) {
    const count = simplified ? 12:100;
    const {data :coinsList,isFetching} = useGetCoinsQuery(count);
    const [Coins, setCoins] = useState(coinsList?.data?.coins);
    const { data: coinHistory,coinHistoryisFetching } = useGetCryptoHistoryQuery({ coinId:"Qwsogvtv82FCd", timeperiod:'3h' });
    
    if (isFetching || coinHistoryisFetching ) return 'Loading...'
   
  console.log({coinsList});
  return (
    <>
    <div className="row">
    {Coins?.map((coin)=>(
   <div key={coin.name} className="col-md-3">
        {coin.change>0 ? (<div  className="card card-success ">
     <div className="card-header glassSucess">
    
     <img src={coin.iconUrl} className="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px",maxWidth:"20px"}} />
      
       <h3 className="card-title">{coin.name}</h3>

       <div className="card-tools successCritical">
       +{coin.change} %
         <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div className="card-body bg-dark " style={{display: "block"}}>
     <div className="row d-flex justify-content-center">
             <div className="col-6 center-block ">
     <p className='mt-3'>  Price :  <kbd> {Number(coin.price).toFixed(2)} $</kbd></p>
     <p>  Market Cap : <kbd>{millify(coin.marketCap)}</kbd></p>
     <p>  24h Change : <kbd className='glassSucess successCritical'><i className="fas fa-caret-up"></i> +{millify(coin.change)} %</kbd></p>
     </div>
     <div className="col-6 center-block text-center">
     {!coinHistoryisFetching && <CardSmallChart bcolor="rgba(10, 219, 33,0.8)" color="rgba(3, 169, 21 ,0.2)" spark={coin.sparkline} coinHistory={coinHistory} currentPrice={millify(coin?.price)} coinName={coin?.name}/>}
     </div>
     </div>
     
     </div>
   
   </div>):(<div  className="card card-danger">
     <div className="card-header glassFailure">
    
          <img src={coin.iconUrl} className="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px"}} />
        
       <h3 className="card-title">{coin.name}</h3>

       <div className="card-tools failureCritical">
       {coin.change} %
         <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div className="card-body bg-dark " style={{display: "block"}}>
         <div className="row d-flex justify-content-center">
             <div className="col-6 center-block ">
             <p className='mt-3'>  Price : <kbd> {Number(coin.price).toFixed(2)} $</kbd></p>
     <p>  Market Cap : <kbd>{millify(coin.marketCap)}</kbd></p>
     <p>  24h Change : <kbd className='glassFailure failureCritical'><i className="fas fa-caret-down"></i>{millify(coin.change)} %</kbd></p>
       
      
             </div>
             <div className="col-6 center-block text-center">
             {!coinHistoryisFetching && <CardSmallChart bcolor="rgba(232, 9, 36,0.8)" color="rgba(205, 2, 26 ,0.2)" spark={coin.sparkline} coinHistory={coinHistory} currentPrice={millify(coin?.price)} coinName={coin?.name}/>}
     </div>
         </div>
   
     </div>
   
   </div>)}
   

 </div>
    ))}
 </div>
    </>
  )
}

export default CryptoCard