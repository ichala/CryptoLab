import React from "react";
import { useGetCoinsQuery } from "../../ApiCalls/CoinsApi";

function Favorites() {

  const { data: coinsList, isFetching } = useGetCoinsQuery(100);
  if (isFetching) return "loading...";
  let favo = localStorage.getItem("fav_cryptoLab");
  console.log({coinsList});
  let myData= coinsList?.data?.coins;
  myData= myData.filter(e =>{
    if (favo) {
    let fav_list = JSON.parse(favo);
      if (fav_list.length>0) {
       return fav_list.includes(e.uuid)
      }else{
        return true
      }
    } else {
      return true
    }
  });
function removeFav(e,id) {
    e.preventDefault();
    let fav_list = JSON.parse(favo);
   let new_fav_list= fav_list.filter(coin=>{
        if (coin==id) {
            return false
        } else {
            return true
        }
    })
    
    if (new_fav_list.length<1) {
        localStorage.removeItem("fav_cryptoLab");
        window.location.href = "/";
    }else{
        localStorage.setItem("fav_cryptoLab",JSON.stringify(new_fav_list));
        window.location.href = "/";
    }
   
 
}
  return (
    <>
      <div class="row">
          {myData?.map(fav=>(
            fav.change<0 ?(
                <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box glassFailure"><div class="card-tools">
<button type="button" class="btn btn-tool" onClick={e=>removeFav(e,fav.uuid)} ><i class="fas fa-times"></i>
</button>
</div>
                  <span class="info-box-icon glassFailure elevation-1">
                  <img
                    src={fav.iconUrl}
                    className="img-circle rounded-circle elevation-4 m-1"
                    alt="User Image"
                    style={{ maxHeight: "40px", maxWidth: "40px" }}
                  />
                  </span>
                  
                  <div class="info-box-content ">
                
                      <div className="row ">
                          <div className="col-8">
                          <span class="info-box-text">{fav.name}</span>
                    <span class="info-box-number ">$ {Number(fav.price).toFixed(4)}</span>
                          </div>
                          <div className="col-4 text-center">
                          <span class="info-box-text failureCritical">{fav.change} <i class="fas fa-caret-down"></i></span>
                       
                          </div>
                      </div>
                   
                  </div>
                </div>
              </div>
            ):(
                <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box glassSucess"><div class="card-tools">
<button type="button" class="btn btn-tool" onClick={e=>removeFav(e,fav.uuid)} ><i class="fas fa-times"></i>
</button>
</div>
                  <span class="info-box-icon  glassSucessBG elevation-1">
                  <img
                    src={fav.iconUrl}
                    className="img-circle rounded-circle elevation-4 m-1"
                    alt="User Image"
                    style={{ maxHeight: "40px", maxWidth: "40px" }}
                  />
                  </span>
                  <div class="info-box-content">
                  <div className="row ">
                          <div className="col-8">
                          <span class="info-box-text">{fav.name}</span>
                    <span class="info-box-number ">$ {Number(fav.price).toFixed(4)}</span>
                          </div>
                          <div className="col-4 text-center">
                              <span class="info-box-text successCritical">+{fav.change} <i class="fas fa-caret-up"></i></span>
                           
                          
                          
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            )
  
          ))}
     
        
      </div>
    </>
  );
}

export default Favorites;
