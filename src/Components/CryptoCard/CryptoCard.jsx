import millify from 'millify'
import React, { useState } from 'react'
import {useGetCoinsQuery} from "../../ApiCalls/CoinsApi"
function CryptoCard({simplified}) {
    const count = simplified ? 12:100;
    const {data :coinsList,isFetching} = useGetCoinsQuery(count);
    const [Coins, setCoins] = useState(coinsList?.data?.coins);
    if (isFetching) return 'Loading...'
  return (
    <>
    {Coins?.map((coin)=>(
   <div key={coin.id} class="col-md-3">
        {coin.change>0 ? (<div  class="card card-success">
     <div class="card-header">
    
     <img src={coin.iconUrl} class="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px"}} />
      
       <h3 class="card-title">{coin.name}</h3>

       <div class="card-tools">
       +{coin.change} %
         <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div class="card-body" style={{display: "block"}}>
       The body of the card
     </div>
   
   </div>):(<div  class="card card-danger">
     <div class="card-header">
    
          <img src={coin.iconUrl} class="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px"}} />
        
       <h3 class="card-title">{coin.name}</h3>

       <div class="card-tools">
       {coin.change} %
         <button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div class="card-body" style={{display: "block"}}>
       The body of the card
     </div>
   
   </div>)}
   

 </div>
    ))}
 
    </>
  )
}

export default CryptoCard