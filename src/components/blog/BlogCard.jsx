import React, { useContext } from "react";
import BlogContext from "../../context/BlogContext";
import { Link } from "react-router-dom";

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardList,
  CardTitle,
  CardExcerpt,
  CardSubHeading,
} from "../tailwind_ui/lib";

const BlogCard = (props) => {
  const blogData = useContext(BlogContext);
  console.log(blogData);
  return (
    <>
      {blogData.map((result, index) => (
        <CardWrapper key={index}>
          <Link to={`/latest-news/${result.id}`}>
            <CardImage src={result.x_featured_media_original} />
            <CardBody>
              <CardList>#</CardList>
              <CardTitle
                dangerouslySetInnerHTML={{ __html: result.title.rendered }}
              />
              <CardSubHeading>{result.acf.subheading}</CardSubHeading>
              <CardExcerpt>{result.acf.article_paragraph}</CardExcerpt>
            </CardBody>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default BlogCard;
