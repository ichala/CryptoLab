import millify from "millify";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HTMLReactParser from "html-react-parser";
import {
  useGetCryptoHistoryQuery,
  useGetCryptoDetailsQuery,
} from "../../ApiCalls/CoinsApi";
import BigChart from "./BigChart/BigChart";
import Loading from "../Loading/Loading";

function CryptoDetails() {
  const { id } = useParams();
  const { name } = useParams();
  const [Sort, setSort] = useState("24h");
  const time = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];

  const { data: coinDetails, isFetching } = useGetCryptoDetailsQuery(id);
  if (isFetching) return <Loading />;

  return (
    <>
      <section className="content-header">
        <h2 className="text-center display-4">
          <img
            className="mb-2"
            height={70}
            width={70}
            src={coinDetails?.data?.coin?.iconUrl}
          />
          {coinDetails?.data?.coin?.name}
          <sup className="text-muted">
            <span className="badge bg-warning">
              {coinDetails?.data?.coin?.symbol}
            </span>
          </sup>{" "}
        </h2>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    {" "}
                    {coinDetails?.data?.coin?.name} Chart Report
                  </h5>
                  <div className="card-tools">
                    <form className="form-inline">
                      <div className="form-group ">
                        <select
                          value={Sort}
                          className="form-control form-control-sm bg-warning"
                          onChange={(e) => {
                            setSort(e.target.value);
                          }}
                        >
                          {time.map((t) => (
                            <option key={t}>{t}</option>
                          ))}
                        </select>
                      </div>
                      <button
                        type="button"
                        className="btn btn-tool"
                        data-card-widget="collapse"
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div style={{ maxHeight: "300px" }}>
                        <BigChart
                          id={id}
                          sort={Sort}
                          coinDetails={coinDetails}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-4 col-12">
                      <div className="description-block ">
                        {coinDetails?.data?.coin?.change < 0 ? (
                          <span className="description-percentage text-danger">
                            <i className="fas fa-caret-down"></i>{" "}
                            {coinDetails?.data?.coin?.change}%
                          </span>
                        ) : (
                          <span className="description-percentage text-success">
                            <i className="fas fa-caret-up"></i>{" "}
                            {coinDetails?.data?.coin?.change}%
                          </span>
                        )}

                        <h5>
                          $ {Number(coinDetails?.data?.coin?.price).toFixed(5)}
                        </h5>
                        <span className="description-text">Current Price</span>
                      </div>
                    </div>

                    <div className="col-sm-4 col-6">
                      <div className="description-block border-left">
                        <span className="description-percentage text-warning">
                          {new Date(
                            coinDetails?.data?.coin?.allTimeHigh?.timestamp *
                              1000
                          ).toLocaleDateString()}
                        </span>
                        <h5>
                          ${" "}
                          {Number(
                            coinDetails?.data?.coin?.allTimeHigh?.price
                          ).toFixed(5)}
                        </h5>
                        <span className="description-text">All Time High</span>
                      </div>
                    </div>

                    <div className="col-sm-4 col-6">
                      <div className="description-block border-left">
                        <span className="description-percentage text-warning">
                          {coinDetails?.data?.coin?.marketCap &&
                            millify(coinDetails?.data?.coin?.marketCap)}
                        </span>
                        <h5>{Number(coinDetails?.data?.coin?.marketCap)}</h5>
                        <span className="description-text">Market Cap</span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-6 text-center">
                      <div className="card bg-dark p-1">
                        <h1>About {name}</h1>
                        {HTMLReactParser(coinDetails.data.coin?.description)}
                      </div>
                    </div>
                    <div className="col-6 text-center">
                      <div className="card bg-dark p-1">
                        <h1>Useful Links </h1>
                        <table class="table table-striped">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Link</th>
                            </tr>
                          </thead>
                          <tbody>
                            {coinDetails.data.coin?.links.map((link) => (
                              <tr>
                                <td>
                                  {link.name} ({link.type})
                                </td>

                                <td>
                                  <a
                                    href={link.url}
                                    target="_blank"
                                    className="btn btn-sm btn-warning p-1"
                                  >
                                    <b>visit</b>
                                  </a>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CryptoDetails;
