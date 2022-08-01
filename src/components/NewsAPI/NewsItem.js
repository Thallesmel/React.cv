import React from 'react';
import './NewsAPI.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className='news-item'>
      <img className='news-img' src={urlToImage} alt='new' />
      <div className='text-box'>
        <a className='news-title' href={url}>
          {title}
        </a>
        <p className='news-description'>{description}</p>
      </div>
    </div>
  );
};

export default NewsItem;
