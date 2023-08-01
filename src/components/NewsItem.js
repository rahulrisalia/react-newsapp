import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let { title, discription, imageUrl, url, author, source } = this.props;
    return (
      <div>
        <div className="card m-auto my-2" style={{ width: "20rem" }}>
          <div style={{
            position: 'absolute',
            right: '0',
          }}>
            <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img className="card-img-top" src={imageUrl} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className='text-muted'>by  {author}</small></p>
            <a href={url} className="btn btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
