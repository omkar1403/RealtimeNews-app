import React, { useEffect,useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const News=(props)=>{

  const[articles,setArticles]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0);

  News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
  }

  News.porpTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


  


  const updatenews=async()=> {
    console.log("cmd")
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56c47a43f8cb45238f625b264d1041f6&page=${page}&pageSize=${props.pageSize}`;

   setLoading(true)
    let data = await fetch(url);
    let parseData = await data.json();
    console.log(parseData);
    setArticles(parseData.articles)
    setTotalResults(parseData.totalResults)
    setLoading(false)
 
  }

  useEffect(()=>{
  updatenews();
  },[])




  
  const perviousclick = async () => {
    setPage(page-1)
updatenews();
  }

 const nextclick = async () => {
      setPage(page+1)
      updatenews();

    }
  
    const fetchMoreData = async () => {   
      setPage(page+1) 
      let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=56c47a43f8cb45238f625b264d1041f6&page=${page}&pageSize=${props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };




    return (
      <div className='container my-3 '>
        <h1 style={{ margin: '60px 0px' }}><strong><u>News From {props.category}</u></strong></h1>
        {loading && <Spinner />}
        <div className="row gap-3">

          {!loading && articles.map((element) => {
            return <div className="col-md-3" key={element.url}>
              <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description } imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} />
            </div>
          })}

        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled={page <= 1} className="btn btn-dark" onClick={perviousclick}>&larr; Previous</button>
          <button type="button" disabled={page + 1 > (Math.ceil(totalResults / props.pageSize))} className="btn btn-dark" onClick={nextclick}>Next  &rarr;</button>
        </div>

      </div>
    )
  }


export default News