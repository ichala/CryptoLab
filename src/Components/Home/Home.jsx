import React from "react";
import {useGetCoinsQuery} from "../../ApiCalls/CoinsApi"
import millify from "millify";
import CryptoCard from "../CryptoCard/CryptoCard";
function Home() {
    const {data , isFetching} = useGetCoinsQuery(12);
    const globalStats= data?.data?.stats;
    if (isFetching) return 'Loading...'
  return (
    <div>
      {" "}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Home Page</h1>
            </div>
           
          </div>
        </div>
      </section>
      <section className="content">
      <div className="container-fluid">
     
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box">
              <span className="info-box-icon bg-warning elevation-1"><i className="fab fa-bitcoin"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Total Cryptocurrencies</span>
                <span className="info-box-number">
                  {globalStats.total}
                </span>
              </div>
    
            </div>
    
          </div>
   
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-danger elevation-1"><i className="fas fa-exchange-alt"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Total Exchanges</span>
                <span className="info-box-number">{globalStats.totalExchanges}</span>
              </div>
           
            </div>
         
          </div>
       

      
          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-success elevation-1"><i className="fas fa-bullseye"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Total Market Cap</span>
                <span className="info-box-number">{millify(Number(globalStats.totalMarketCap))}</span>
              </div>
          
            </div>
          
          </div>
         
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-info elevation-1"><i className="fas fa-clock"></i></span>

              <div className="info-box-content"> 
                <span className="info-box-text">Total 24h Volume</span>
                <span className="info-box-number">{millify(Number(globalStats.total24hVolume))}</span>
              </div>
            
            </div>
           
          </div>
         
        </div>
      
        <div className="row">
       <div className="col-12">

     
        <div className="card">
              <div className="card-header mb-1">
                <h3 className="card-title">Top 12 Cryptocurrencies worldwide</h3>

                <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
             
              <div className="card-body m-1 p-0">
              <CryptoCard simplified />
              </div>
           
            </div></div>
          </div>
        <h4 className="mb-2 ">News</h4>
        <div className="card card-success">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-4">
                <div className="card mb-2 bg-gradient-dark">
                  <img className="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title text-primary text-white">Card Title</h5>
                    <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" className="text-white">Last update 2 mins ago</a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4">
                <div className="card mb-2 bg-gradient-dark">
                  <img className="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title text-primary text-white">Card Title</h5>
                    <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" className="text-white">Last update 2 mins ago</a>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 col-xl-4">
                <div className="card mb-2 bg-gradient-dark">
                  <img className="card-img-top" src="../dist/img/photo1.png" alt="Dist Photo 1" />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <h5 className="card-title text-primary text-white">Card Title</h5>
                    <p className="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" className="text-white">Last update 2 mins ago</a>
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
