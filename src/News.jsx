import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = "350596150b7a4d99874962d667c94db5";
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=US&apiKey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const data = response.data.articles;
        setArticles(data);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }, []);

  return (
    <>
      <Navbar />
      <div className="news-container">
        <h1>Latest News</h1>
        <div className="articles">
          {articles.map((article, index) => (
            <div key={index} className="article">
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default News;
