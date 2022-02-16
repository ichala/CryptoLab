import React, { useState } from "react";
import { useGetCoinsQuery } from "../../ApiCalls/CoinsApi";
import CryptoCard from "../CryptoCard/CryptoCard";
import Loading from "../Loading/Loading";
function AllCryptos() {
  const { data, isFetching } = useGetCoinsQuery(100);
  const globalStats = data?.data?.stats;
  const [Sort, setSort] = useState("top");
  if (isFetching) return <Loading />;

  return (
    <div>
      {" "}
      <section className="content-header">
        <div className="row"></div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card p-1">
                <div className="card-header ">
                  <div className="card-tools ">
                  <form className="form-inline">
                  <div className="form-group ">
                  
                    <select
                  
                      value={Sort}
                      className="form-control form-control-sm bg-warning"
                      onChange={(e) => {
                        setSort(e.target.value);
                      }}
                    >
                  
                      <option value="top">Top Ranked</option>
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="change">Change 24h +</option>
                      <option value="change-">Change 24h -</option>
                      <option value="marketcap">Market Cap +</option>
                      <option value="marketcap-">Market Cap -</option>
                    </select>
                    </div>
                 
                    </form>
                  
                  </div>
                </div>

                <div className="card-body m-1 p-0">
                  <CryptoCard filter={Sort} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AllCryptos;
