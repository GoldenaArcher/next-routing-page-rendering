import { DUMMY_NEWS } from "@/dummy-news";
import React from "react";
import NewsList from "../_components/news-list";

const News = () => {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
};

export default News;
