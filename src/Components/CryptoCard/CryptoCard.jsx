import millify from "millify";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  useGetCoinsQuery,
  
} from "../../ApiCalls/CoinsApi";
import Loading from "../Loading/Loading";
import CardSmallChart from "./CardSmallChart/CardSmallChart";
function CryptoCard({ simplified ,filter}) {
  const count = simplified ? 12 : 100;
  const { data: coinsList, isFetching } = useGetCoinsQuery(count);
  const [Coins, setCoins] = useState(coinsList?.data?.coins);

  if (isFetching) return <Loading/>;
  let myData = Coins;
    switch (filter) {
      case "price":
        myData = [].concat(Coins)
        .sort((a, b) => Number(a.price) > Number(b.price) ? -1 : 1)
        break;
        case "name":
           myData = [].concat(Coins)
          .sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
        break;
        case "change":
          myData = [].concat(Coins)
          .sort((a, b) => a.change > b.change ? -1 : 1)
        break;
        case "change-":
          myData = [].concat(Coins)
          .sort((a, b) => a.change > b.change ? 1 : -1)
        break;
        case "marketcap":
          myData = [].concat(Coins)
          .sort((a, b) => Number(a.marketCap) > Number(b.marketCap) ? -1 : 1)
        break;
        case "marketcap-":
          myData = [].concat(Coins)
          .sort((a, b) => Number(a.marketCap) > Number(b.marketCap) ? 1 : -1)
        break;
      default:
        myData = Coins;
        break;
    }


  

  return (
    <>
      <div className="row">
        {myData?.map((coin) => (
          <div key={coin.name} className="col-md-3">
            {coin.change > 0 ? (
              <div className="card card-success ">
                <div className="card-header glassSucess">
                  <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <img
                    src={coin.iconUrl}
                    className="img-circle rounded-circle elevation-4 m-1"
                    alt="User Image"
                    style={{ maxHeight: "20px", maxWidth: "20px" }}
                  />

                  <h3 className="card-title">{coin.name}</h3>
</Link>
                  <div className="card-tools successCritical">
                    +{coin.change} %
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>

                <div
                  className="card-body bg-dark "
                  style={{ display: "block" }}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-6 center-block ">
                      <p className="mt-3">
                        {" "}
                        Price : <kbd> {Number(coin.price).toFixed(2)} $</kbd>
                      </p>
                      <p>
                        {" "}
                        Market Cap : <kbd>{millify(coin.marketCap)}</kbd>
                      </p>
                      <p>
                        {" "}
                        24h Change :{" "}
                        <kbd className="glassSucess successCritical">
                          <i className="fas fa-caret-up"></i> +
                          {millify(coin.change)} %
                        </kbd>
                      </p>
                      <button className="btn btn-xs btn-warning"><i className="fas fa-star"></i> Add Favorite</button> 
                    </div>
                    <div className="col-6 center-block text-center">
                    <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                        <CardSmallChart
                          bcolor="rgba(10, 219, 33,0.8)"
                          color="rgba(3, 169, 21 ,0.2)"
                          spark={coin.sparkline}
                         
                          currentPrice={millify(coin?.price)}
                          coinName={coin?.name}
                        />
                    </Link>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card card-danger">
                <div className="card-header glassFailure">
                <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <img
                    src={coin.iconUrl}
                    className="img-circle rounded-circle elevation-4 m-1"
                    alt="User Image"
                    style={{ maxHeight: "20px" }}
                  />

                  <h3 className="card-title">{coin.name}</h3>
</Link>
                  <div className="card-tools failureCritical">
                    {coin.change} %
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                  </div>
                </div>

                <div
                  className="card-body bg-dark "
                  style={{ display: "block" }}
                >
                  <div className="row d-flex justify-content-center">
                    <div className="col-6 center-block ">
                      <p className="mt-3">
                        {" "}
                        Price : <kbd> {Number(coin.price).toFixed(2)} $</kbd>
                      </p>
                      <p>
                        {" "}
                        Market Cap : <kbd>{millify(coin.marketCap)}</kbd>
                      </p>
                      <p>
                        {" "}
                        24h Change :{" "}
                        <kbd className="glassFailure failureCritical">
                          <i className="fas fa-caret-down"></i>
                          {millify(coin.change)} %
                        </kbd>
                      </p>
                      {/* <button className="btn btn-xs btn-warning"><i className="fas fa-star"></i> Add Favorite</button>  */}
                    </div>
                    <div className="col-6 center-block text-center">
                    <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                        <CardSmallChart
                          bcolor="rgba(232, 9, 36,0.8)"
                          color="rgba(205, 2, 26 ,0.2)"
                          spark={coin.sparkline}
                         
                          currentPrice={millify(coin?.price)}
                          coinName={coin?.name}
                        />
                 </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default CryptoCard;
