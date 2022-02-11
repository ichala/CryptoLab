import React from "react";
import {useGetCoinsQuery} from "../../ApiCalls/CoinsApi"
import millify from "millify";
import CryptoCard from "../CryptoCard/CryptoCard";
function Home() {
    const {data , isFetching} = useGetCoinsQuery(12);
    console.log(data);
    const globalStats= data?.data?.stats;
    if (isFetching) return 'Loading...'
  return (
    <div>
      {" "}
      <section class="content-header">
        <div class="container-fluid">
          <div class="row mb-2">
            <div class="col-sm-6">
              <h1>Home Page</h1>
            </div>
           
          </div>
        </div>
      </section>
      <section class="content">
      <div class="container-fluid">
     
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-warning elevation-1"><i class="fab fa-bitcoin"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Total Cryptocurrencies</span>
                <span class="info-box-number">
                  {globalStats.total}
                </span>
              </div>
    
            </div>
    
          </div>
   
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-exchange-alt"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Total Exchanges</span>
                <span class="info-box-number">{globalStats.totalExchanges}</span>
              </div>
           
            </div>
         
          </div>
       

      
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-success elevation-1"><i class="fas fa-bullseye"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Total Market Cap</span>
                <span class="info-box-number">{millify(Number(globalStats.totalMarketCap))}</span>
              </div>
          
            </div>
          
          </div>
         
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-info elevation-1"><i class="fas fa-clock"></i></span>

              <div class="info-box-content"> 
                <span class="info-box-text">Total 24h Volume</span>
                <span class="info-box-number">{millify(Number(globalStats.total24hVolume))}</span>
              </div>
            
            </div>
           
          </div>
         
        </div>
        <h4 class="mb-2 ">Top 12 Cryptocurrencies Worldwide</h4>
        <div class="row">
         <CryptoCard simplified />
 
          
         
         
         
        </div>
       
        <h4 class="mb-2 ">News</h4>
        <div class="card card-success">
          <div class="card-body">
            <div class="row">
              <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card mb-2 bg-gradient-dark">
                  <img class="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title text-primary text-white">Card Title</h5>
                    <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" class="text-white">Last update 2 mins ago</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card mb-2 bg-gradient-dark">
                  <img class="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title text-primary text-white">Card Title</h5>
                    <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" class="text-white">Last update 2 mins ago</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-lg-6 col-xl-4">
                <div class="card mb-2 bg-gradient-dark">
                  <img class="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div class="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 class="card-title text-primary text-white">Card Title</h5>
                    <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" class="text-white">Last update 2 mins ago</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       
    </section>
   
    </div>
  );
}

export default Home;
