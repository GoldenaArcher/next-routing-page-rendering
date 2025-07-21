import NewsList from "@/app/_components/news-list";
import { getLatestNews } from "@/app/_lib/news";
import React from "react";

const LatestNewsPage = () => {
  const LatestNews = getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={LatestNews} />
    </>
  );
};

export default LatestNewsPage;
