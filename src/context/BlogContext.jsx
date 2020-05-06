import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [data, loading] = useFetch("/wp-json/wp/v2/latest_news");
  if (loading) {
    return <Loading />;
  } else {
    return <BlogContext.Provider value={data}>{children}</BlogContext.Provider>;
  }
};

export default BlogContext;
