import Axios from 'axios';
import NewsItem from './NewsItem';
import React, { useState, useEffect } from 'react';

import './NewsAPI.css';

const NewsAPI = () => {
  const [articles, setArticles] = useState([]);
  const apiKey = '3984614621e54adeacf54a0c6f8b7017';

  useEffect(() => {
    const getArticles = async () => {
      const res = await Axios.get(
        'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=' +
          apiKey +
          ''
      );  
      setArticles(res.data.articles);
    };
    getArticles();
  });

  return (
    <div className='newsAPI'>
      {articles.map(({ title, description, url, urlToImage }) => (
        <NewsItem
          title={title}
          description={description}
          url={url}
          urlToImage={urlToImage}
        />
      ))}
    </div>
  );
};

export default NewsAPI;
