import React from 'react'
  import { useGetCryptoNewsQuery } from '../../ApiCalls/cryptoNewsApi';
  import moment from 'moment';
function NewsCard({simplified}) {
  
    const { data: cryptoNews,isFetching } = useGetCryptoNewsQuery({newsCategory:"Cryptocurrencies", count: simplified ? 6:10 });
    if (isFetching) return 'Loading...'
    console.log(cryptoNews);
  return (
    <>
    {cryptoNews?.value?.map((news)=>(
           <div className="col-md-12 col-lg-6 col-xl-4">
         <div class="card bg-gradient-dark d-flex flex-fill">
                <div class="card-header text-muted border-bottom-0">
                <h5 className="card-title">{news.category ? (news.category):("Random")}</h5> 
                 <div className="card-tools">
                  <button type="button" className="btn btn-tool" data-card-widget="collapse">
                    <i className="fas fa-minus"></i>
                  </button>
                </div>
                </div>
                
                <div class="card-body pt-0 m-3">
                  <div class="row">
                    <div class="col-7">
                      <h2 class="lead"><b>{news.name.substring(0, 40)}...</b></h2>
                      <p class="text-muted text-sm">{news.description.substring(0, 100)}... </p>
                      <ul class="ml-4 mb-0 fa-ul text-muted">
                        <li class="small"><span class="fa-li"><i class="fas fa-md fa-clock"></i></span> <b>{moment(news.datePublished).startOf('ss').fromNow()}</b></li>
                       
                      </ul>
                    </div>
                    <div class="col-5 text-center">
                      <img src={news.image?.thumbnail?.contentUrl } alt="user-avatar" class="img-circle rounded img-fluid" />
                    </div>
                  </div>
                </div>
                <div class="card-footer">
                  <div class="text-right">
                    
                    <a href={news.url} target="_blank" class="btn btn-sm btn-warning">
                    <i class="fas fa-angle-double-right"></i> Read More
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