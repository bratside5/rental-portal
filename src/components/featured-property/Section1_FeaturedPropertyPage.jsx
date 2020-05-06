import React from "react";

function Section1_FeaturedProperty({ item }) {
  return (
    <>
      <p>{item.acf.title}</p>
      <p>{item.acf.subheading}</p>
      <p>{item.acf.product_description}</p>
      <p>{item.x_author}</p>
      <p>{item.x_date}</p>
      <p>{item.x_featured_media_medium}</p>
    </>
  );
}

export default Section1_FeaturedProperty;
