import React from "react";
import {useGetCoinsQuery} from "../../ApiCalls/CoinsApi"
import millify from "millify";
import CryptoCard from "../CryptoCard/CryptoCard";
import { Link } from "react-router-dom";
import NewsCard from "../NewsCard/NewsCard";
import Loading from "../Loading/Loading";
function Home() {
    const {data , isFetching} = useGetCoinsQuery(12);
    const globalStats= data?.data?.stats;
    
    if (isFetching) return <Loading/>
  return (
    <div>
      {" "}
      <section className="content-header">
      <h2 className="text-center display-4"><img className="mb-2" height={70} width={70} src="./logo.gif"/>Crypto<sup className="text-muted"><span className="badge bg-warning">Lab </span></sup> </h2>
   
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
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-exchange-alt"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Total Exchanges</span>
                <span className="info-box-number">{globalStats.totalExchanges}</span>
              </div>
           
            </div>
         
          </div>
       

      
          <div className="clearfix hidden-md-up"></div>

          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-bullseye"></i></span>

              <div className="info-box-content">
                <span className="info-box-text">Total Market Cap</span>
                <span className="info-box-number">{millify(Number(globalStats.totalMarketCap))}</span>
              </div>
          
            </div>
          
          </div>
         
          <div className="col-12 col-sm-6 col-md-3">
            <div className="info-box mb-3">
              <span className="info-box-icon bg-warning elevation-1"><i className="fas fa-clock"></i></span>

              <div className="info-box-content"> 
                <span className="info-box-text">Total 24h Volume</span>
                <span className="info-box-number">{millify(Number(globalStats.total24hVolume))}</span>
              </div>
            
            </div>
           
          </div>
         
        </div>
      
        <div className="row"> 
       <div className="col-12">

     
        <div className="card p-1" >
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
              <div className="card-footer">
                  <div className="text-right">
                  <Link to="/Crypto/All" className="btn btn-sm btn-warning">
                  <i className="fas fa-search-dollar"></i> View More
                    </Link>
                   
                  </div>
                </div>
            </div></div>
          </div>
       
          <div className="card">
              <div className="card-header mb-1">
                <h3 className="card-title">Cryptocurrencies News</h3>

                <div className="card-tools">
              
                    
                   
          
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
              </div>
          <div className="card-body">
            <div className="row">
           <NewsCard simplified/>
            </div>
          </div>
          <div className="card-footer">
                  <div className="text-right">
                    
                  <Link to="/Crypto/All" className="btn btn-sm btn-warning">
                    <i className="fas fa-search"></i> View More
                    </Link>
                  </div>
                </div>
        </div>
       </div>
       
    </section>
   
    </div>
  );
}

export default Home;
