'use client'

import React, { useEffect, useState } from "react";
import NewsList from "../../_components/news-list";

const News = () => {
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const res = await fetch('http://localhost:8080/news');

      if (!res.ok) {
        setError('Failed to fetch news');
        setIsLoading(false);
        return;
      }
      const data = await res.json();
      setNews(data);
      setIsLoading(false);
    }

    fetchNews();
  }, [])

  if (isLoading) {
    return (
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    )
  }

  if (news.length === 0) {
    return (
      <div>
        <p>No news found</p>
      </div>
    )
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default News;
