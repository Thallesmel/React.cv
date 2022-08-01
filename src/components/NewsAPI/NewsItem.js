import React from 'react';
import './NewsAPI.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
  return (
    <div className='news-item'>
      <img className='news-img' src={urlToImage} alt='new image' />
      <a className='news-title' href={url}>{title}</a>
      <p className='news-description'>{description}</p>
    </div>
  );
};

export default NewsItem;
