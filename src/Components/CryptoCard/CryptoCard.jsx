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
    <div className="row">
    {Coins?.map((coin)=>(
   <div key={coin.name} className="col-md-3">
        {coin.change>0 ? (<div  className="card card-success ">
     <div className="card-header glassSucess">
    
     <img src={coin.iconUrl} className="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px",maxWidth:"20px"}} />
      
       <h3 className="card-title">{coin.name}</h3>

       <div className="card-tools">
       +{coin.change} %
         <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div className="card-body" style={{display: "block"}}>
     <div className="row d-flex justify-content-center">
             <div className="col-12 center-block text-center">
     <p>  Price :  <kbd>$ {millify(coin.price)} </kbd></p>
     <p>  Market Cap : <kbd>{millify(coin.marketCap)}</kbd></p>
     <p>  Daily Change : <kbd className='bg-success'><i className="fas fa-caret-up"></i> +{millify(coin.change)} %</kbd></p>
     </div>
     </div>
     
     </div>
   
   </div>):(<div  className="card card-danger">
     <div className="card-header glassFailure">
    
          <img src={coin.iconUrl} className="img-circle rounded-circle elevation-4 m-1" alt="User Image" style={{maxHeight:"20px"}} />
        
       <h3 className="card-title">{coin.name}</h3>

       <div className="card-tools">
       {coin.change} %
         <button type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-minus"></i>
         </button>
       </div>
     
     </div>
   
     <div className="card-body" style={{display: "block"}}>
         <div className="row d-flex justify-content-center">
             <div className="col-12 center-block text-center">
             <p>  Price : <kbd>$ {millify(coin.price)} </kbd></p>
     <p>  Market Cap : <kbd>{millify(coin.marketCap)}</kbd></p>
     <p>  Daily Change : <kbd className='bg-danger'><i className="fas fa-caret-down"></i>{millify(coin.change)} %</kbd></p>
       
      
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