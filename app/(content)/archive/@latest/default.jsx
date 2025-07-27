import NewsList from "@/app/_components/news-list";
import { getLatestNews } from "@/lib/news";
import React from "react";

const LatestNewsPage = async () => {
  const LatestNews = await getLatestNews();

  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={LatestNews} />
    </>
  );
};

export default LatestNewsPage;
