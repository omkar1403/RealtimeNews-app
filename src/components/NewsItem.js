import React from 'react'

const NewsItem =(props)=>{
 
    let { title, description, imageUrl, newsUrl, author, date} = props;
    return (
      <div className='my-3'>
        <div className="card" style={{ width: "18rem" }}>
       
          <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/14114/production/_126769128_reliance.jpg":imageUrl} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p class="card-text"><small class="text-muted">By {!author?"unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem