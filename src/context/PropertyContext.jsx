import React, { createContext } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "../components/Loading";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [data, loading] = useFetch("/wp-json/wp/v2/products");
  if (loading) {
    return <Loading />;
  } else {
    return (
      <PropertyContext.Provider value={data}>
        {children}
      </PropertyContext.Provider>
    );
  }
};

export default PropertyContext;
