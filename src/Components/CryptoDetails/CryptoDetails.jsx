import React from "react";
import { useGetCryptoHistoryQuery } from "../../ApiCalls/CoinsApi";
import BigChart from "./BigChart/BigChart";

function CryptoDetails() {
    
    const { data: coinHistory, isFetching } = useGetCryptoHistoryQuery(
        { coinId: "Qwsogvtv82FCd", timeperiod: "3h" }
      );
      if (isFetching) return "Loading...";
    console.log(coinHistory);
  return (
    <>
      <section className="content-header">
        <h2 className="text-center display-4">
          <img className="mb-2" height={70} width={70} src="./logo.gif" />
          Crypto
          <sup className="text-muted">
            <span className="badge bg-warning">Lab </span>
          </sup>{" "}
        </h2>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Monthly Recap Report</h5>
                  <div className="card-tools">
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="collapse"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-tool dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        <i className="fas fa-wrench"></i>
                      </button>
                      <div
                        className="dropdown-menu dropdown-menu-right"
                        role="menu"
                      >
                        <a href="#" className="dropdown-item">
                          Action
                        </a>
                        <a href="#" className="dropdown-item">
                          Another action
                        </a>
                        <a href="#" className="dropdown-item">
                          Something else here
                        </a>
                        <a className="dropdown-divider"></a>
                        <a href="#" className="dropdown-item">
                          Separated link
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="btn btn-tool"
                      data-card-widget="remove"
                    >
                      <i className="fas fa-times"></i>
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                    <BigChart/>
                    
                    </div>

                   
                  </div>
                </div>

                <div className="card-footer">
                  <div className="row">
                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-success">
                          <i className="fas fa-caret-up"></i> 17%
                        </span>
                        <h5 className="description-header">$35,210.43</h5>
                        <span className="description-text">TOTAL REVENUE</span>
                      </div>
                    </div>

                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-warning">
                          <i className="fas fa-caret-left"></i> 0%
                        </span>
                        <h5 className="description-header">$10,390.90</h5>
                        <span className="description-text">TOTAL COST</span>
                      </div>
                    </div>

                    <div className="col-sm-3 col-6">
                      <div className="description-block border-right">
                        <span className="description-percentage text-success">
                          <i className="fas fa-caret-up"></i> 20%
                        </span>
                        <h5 className="description-header">$24,813.53</h5>
                        <span className="description-text">TOTAL PROFIT</span>
                      </div>
                    </div>

                    <div className="col-sm-3 col-6">
                      <div className="description-block">
                        <span className="description-percentage text-danger">
                          <i className="fas fa-caret-down"></i> 18%
                        </span>
                        <h5 className="description-header">1200</h5>
                        <span className="description-text">GOAL COMPLETIONS</span>
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
