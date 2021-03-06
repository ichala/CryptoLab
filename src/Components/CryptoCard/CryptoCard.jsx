import millify from "millify";
import React from "react";
import { Link } from "react-router-dom";

import { useGetCoinsQuery } from "../../ApiCalls/CoinsApi";
import Loading from "../Loading/Loading";
import CardSmallChart from "./CardSmallChart/CardSmallChart";
function CryptoCard({ simplified, filter, Search }) {
  const count = simplified ? 12 : 100;
  const { data: coinsList, isFetching } = useGetCoinsQuery(count);

  if (isFetching) return <Loading />;

  let myData = coinsList?.data?.coins;
  console.log(myData);
  console.log({ coinsList });
  switch (filter) {
    case "price":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (Number(a.price) > Number(b.price) ? -1 : 1));
      break;
    case "name":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1));
      break;
    case "change":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (a.change > b.change ? -1 : 1));
      break;
    case "change-":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (a.change > b.change ? 1 : -1));
      break;
    case "marketcap":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (Number(a.marketCap) > Number(b.marketCap) ? -1 : 1));
      break;
    case "marketcap-":
      myData = []
        .concat(coinsList?.data?.coins)
        .sort((a, b) => (Number(a.marketCap) > Number(b.marketCap) ? 1 : -1));
      break;
    default:
      myData = coinsList?.data?.coins;
      break;
  }
  let favo = localStorage.getItem("fav_cryptoLab");

  function fav(id) {
    let fav = JSON.parse(favo);
    let old = false;
    if (!fav) {
      return old;
    } else {
      if (fav.length < 1) {
        return old;
      } else {
        fav?.forEach((coin) => {
          if (coin === id) {
            old = true;
          }
        });
      }
    }
    return old;
  }
  function AddFav(e, id) {
    e.preventDefault();
    let fav = localStorage.getItem("fav_cryptoLab");
    if (fav) {
      let fav_list = JSON.parse(fav);
      fav_list.push(id);
      localStorage.setItem("fav_cryptoLab", JSON.stringify(fav_list));
      window.location.href = "/";
    } else {
      let fav_list = [id];
      localStorage.setItem("fav_cryptoLab", JSON.stringify(fav_list));
      window.location.href = "/";
    }
  }
  if (Search || Search !== "") {
    myData = myData.filter(
      (f) =>
        f.name.toLowerCase().includes(Search) ||
        f.symbol.toLowerCase().includes(Search)
    );
  }
  return (
    <>
      <div className="row">
        {myData?.map((coin) => (
          <div key={coin.name} className="col-md-3">
            {coin.change > 0 ? (
              <div className="card card-success ">
                <div className="card-header glassSucess">
                  <Link to={"/Lab/" + coin.name + "/" + coin.uuid + "/"}>
                    <img
                      src={coin.iconUrl}
                      className="img-circle rounded-circle elevation-4 m-1"
                      alt={coin.name}
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
                  className="card-body glassSucessBG"
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
                      {!fav(coin.uuid) && (
                        <button
                          className="btn btn-xs btn-warning"
                          onClick={(e) => AddFav(e, coin.uuid)}
                        >
                          <i className="fas fa-star"></i> Add Favorite
                        </button>
                      )}
                    </div>
                    <div className="col-6 center-block text-center">
                      <Link to={"/Lab/" + coin.name + "/" + coin.uuid + "/"}>
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
                  <Link to={"/Lab/" + coin.name + "/" + coin.uuid + "/"}>
                    <img
                      src={coin.iconUrl}
                      className="img-circle rounded-circle elevation-4 m-1"
                      alt={coin.name}
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
                  className="card-body glassFailureBG "
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
                      {!fav(coin.uuid) && (
                        <button
                          className="btn btn-xs btn-warning"
                          onClick={(e) => AddFav(e, coin.uuid)}
                        >
                          <i className="fas fa-star"></i> Add Favorite
                        </button>
                      )}
                    </div>
                    <div className="col-6 center-block text-center">
                      <Link to={"/Lab/" + coin.name + "/" + coin.uuid + "/"}>
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
