import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import HeroFPP from "./Hero_FeaturedPropertyPage";
import Section1 from "./Section1_FeaturedPropertyPage";

const FeaturedPropertyPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [item, setItem] = useState({
    acf: {},
  });
  const fetchItem = async () => {
    const fetchItem = await fetch(`/wp-json/wp/v2/products/${id}`);
    const item = await fetchItem.json();
    setItem(item);
  };

  return (
    <>
      <HeroFPP item={item} />
      <Section1 item={item} />
    </>
  );
};

export default FeaturedPropertyPage;
