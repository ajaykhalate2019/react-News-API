import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function News() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      axios.get(`https://newsapi.org/v2/everything?q=tesla&from=2025-01-01&sortBy=publishedAt&apiKey=75e2cd5b09ea4eb5ba904474c1657f5f`)
        .then(res => {
          console.log(res);
          setNews(res.data.articles);
        });
    }, []);
  
    return (
      <>
        <div style={{ marginTop: '20px', padding: '20px' }}>
          <h2>Breaking News</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {news.slice(0, 10).map((n, k) => (
              <div key={k} style={{ border: '1px solid #ddd', padding: '10px', width: '300px' }}>
                <img src={n.urlToImage} alt="news image" style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                <h3>{n.title}</h3>
                <p>{n.description}</p>
                <a href={n.url} target="_blank" style={{ display: 'block', backgroundColor: 'blue', color: 'white', textAlign: 'center', padding: '5px', textDecoration: 'none' }}>Read more</a>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
  