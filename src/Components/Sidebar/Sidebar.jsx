import React from "react";
import { Link } from "react-router-dom";
import { useGetCoinsQuery } from "../../ApiCalls/CoinsApi";

function Sidebar() {
  const { data: coinsList, isFetching } = useGetCoinsQuery(100);
  let favo = localStorage.getItem("fav_cryptoLab");
  let myData= coinsList?.data?.coins?.filter(e =>{
    if (favo) {
    let fav_list = JSON.parse(favo);
      if (fav_list.length>0) {
       return fav_list.includes(e.uuid)
      }else{
        return false
      }
    } else {
      return false
    }
  });
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link">
              <img
                className="ml-1"
                height="20"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
                alt="Javascript"
              />
              <img
                height="20"
                className="ml-1"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                alt="REACT"
              />
              <img
                height="20"
                className="ml-1"
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"
                alt="Redux"
              />
              <img
                height="20"
                className="ml-1"
                src="https://adminlte.io/themes/v3/dist/img/AdminLTELogo.png"
                alt="AdminLte"
              />
              <img
                height="20"
                className="ml-1"
                src="https://rapidapi.com/static-assets/default/favicon.ico"
                alt="RAPID API"
              />
              <a
                type="button"
                href="https://github.com/ichala/CryptoLab"
                target="_blank"
                class="btn  btn-warning btn-xs ml-1"
              >
                <i class="fab fa-github"></i> Source Code
              </a>
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
              <i class="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
        </ul>
      </nav>
      <aside className="main-sidebar sidebar-dark-warning elevation-4">
        <Link to="/" className="brand-link" style={{ borderBottom: 0 }}>
          <img
            src="/logo.gif"
            alt="AdminLTE Logo"
            className="brand-image img-circle elevation-3"
          ></img>
          <h4>
            <span className="brand-text font-weight-light">
              Crypto
              <sup className="text-muted">
                <span className="badge bg-warning">
                  <b>Lab</b>
                </span>
              </sup>
            </span>
          </h4>
          <hr className="bg-warning"></hr>
        </Link>

        <div className="sidebar" style={{ marginTop: "0px" }}>
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item text-md">
                <Link to="/" className="nav-link">
                  <i className="nav-icon fas fa-home"></i>
                  <p>Home</p>
                </Link>
              </li>
              <li className="nav-item text-md">
                <Link to="/Crypto/All" className="nav-link">
                  <i className="nav-icon fab fa-bitcoin"></i>
                  <p>Cryptocurrencies</p>
                </Link>
              </li>
              <li className="nav-item text-md">
                <a href="/docs/3.1//layout.html" className="nav-link">
                <i className="nav-icon fas fa-newspaper"></i>
                  <p>News</p>
                </a>
              </li>
              {favo && <li class="nav-header"><i class="nav-icon fas fa-star text-warning"></i> Favorites</li>}
              {myData?.map((coin) =>
                coin.change < 0 ? (
                  <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <li class="nav-header ">
                    {" "}
                   <span >
                      {coin.symbol}-USD  <span className="text-success">{coin.change}%</span>
                     
                   </span>
                  </li>
                  </Link>
                ) : (
                  <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <li class="nav-header ">
                    {" "}
                    <span >
                      {coin.symbol}-USD  <span className="text-danger">{coin.change}%</span>
                     
                   </span>
                  </li>
                  </Link>
                )
              )}
              <li class="nav-header"><i class="nav-icon fas fa-chart-line text-warning"></i> Prices</li>
              {coinsList?.data.coins.map((coin) =>
                coin.change < 0 ? (
                  <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <li class="nav-header ">
                    {" "}
                    <span >
                      {coin.symbol}-USD  <span className="text-danger">{coin.change}%</span>
                     
                   </span>
                  </li>
                  </Link>
                ) : (
                  <Link to={"/Lab/"+coin.name+"/"+coin.uuid+"/"}>
                  <li class="nav-header ">
                    {" "}
                    <span >
                      {coin.symbol}-USD  <span className="text-success">{coin.change}%</span>
                     
                   </span>
                  </li>
                  </Link>
                )
              )}
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
