import React from "react";
import { CardTags, TagContainer, TagSpan } from "./tailwind_ui/lib";

const Tags = ({ result }) => {
  const tags = result.x_tags.split(",");
  return (
    <>
      <CardTags>
        <TagContainer>
          {tags.map((tag, index) => (
            <TagSpan key={index}>#{tag}</TagSpan>
          ))}
        </TagContainer>
      </CardTags>
    </>
  );
};

export default Tags;
