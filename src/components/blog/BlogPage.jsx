import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import tw from "twin.macro";
// import HeroFPP from "./Hero_FeaturedPropertyPage";
// import Section1 from "./Section1_FeaturedPropertyPage";

const FeaturedPropertyPage = (props) => {
  const { id } = useParams();

  useEffect(() => {
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [item, setItem] = useState({
    acf: {},
    title: {},
  });
  const fetchItem = async () => {
    const fetchItem = await fetch(
      `http://api.igbot.local/wp-json/wp/v2/latest_news/${id}`
    );
    const item = await fetchItem.json();
    setItem(item);
  };
  console.log(item);
  return (
    <>
      <div>
        <div dangerouslySetInnerHTML={{ __html: item.title.rendered }}></div>
      </div>
      <div>{item.acf.subheading}</div>
      <div>{item.acf.article_paragraph}</div>
    </>
  );
};

export default FeaturedPropertyPage;
