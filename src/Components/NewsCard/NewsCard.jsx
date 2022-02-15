import React from 'react'
  import { useGetCryptoNewsQuery } from '../../ApiCalls/cryptoNewsApi';
  import moment from 'moment';
function NewsCard({simplified}) {
  
    const { data: cryptoNews,isFetching } = useGetCryptoNewsQuery({newsCategory:"Cryptocurrencies", count: simplified ? 6:10 });
    if (isFetching) return 'Loading...'
    
  return (
    <>
    {cryptoNews?.value?.map((news)=>(
           <div key={news.name} className="col-md-12 col-lg-6 col-xl-4">
         <div className="card bg-gradient-dark d-flex flex-fill">
                <div className="card-header text-muted border-bottom-0">
                <h5 className="card-title">{news.category ? (news.category):("Random")}</h5> 
                 <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                </div>
                
                <div className="card-body pt-0 m-3">
                  <div className="row">
                    <div className="col-7">
                      <h2 className="lead"><b>{news.name.substring(0, 40)}...</b></h2>
                      <p className="text-muted text-sm">{news.description.substring(0, 100)}... </p>
                      <ul className="ml-4 mb-0 fa-ul text-muted">
                        <li className="small"><span className="fa-li"><i className="fas fa-md fa-clock"></i></span> <b>{moment(news.datePublished).startOf('ss').fromNow()}</b></li>
                       
                      </ul>
                    </div>
                    <div className="col-5 text-center">
                      <img src={news.image?.thumbnail?.contentUrl } alt="user-avatar" className="img-circle rounded img-fluid" />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <div className="text-right">
                    
                    <a href={news.url} target="_blank" className="btn btn-sm btn-warning">
                    <i className="fas fa-angle-double-right"></i> Read More
                    </a>
                  </div>
                </div>
              </div>
     
              </div>
       
    ))}   
    </>
  )
}

export default NewsCard