import React from "react";
import BlogCard from "./BlogCard";
import {
  GridWrapper,
  GridContainer,
  SectionTitle,
  CardContainer,
} from "../tailwind_ui/lib.js";

const BlogList = () => {
  return (
    <>
      <GridWrapper>
        <SectionTitle>Latest News</SectionTitle>
        <GridContainer>
          <CardContainer>
            <BlogCard />
          </CardContainer>
        </GridContainer>
      </GridWrapper>
    </>
  );
};

export default BlogList;
