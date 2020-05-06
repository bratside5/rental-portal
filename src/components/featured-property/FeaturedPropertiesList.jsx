import React from "react";
import FeaturedPropertyCard from "./FeaturedPropertyCard";
import {
  GridWrapper,
  GridContainer,
  SectionTitle,
  CardContainer,
} from "../tailwind_ui/lib";

const FeaturedPropertiesList = () => {
  return (
    <>
      <GridWrapper>
        <SectionTitle>Featured Properties</SectionTitle>
        <GridContainer>
          <CardContainer>
            <FeaturedPropertyCard />
          </CardContainer>
        </GridContainer>
      </GridWrapper>
    </>
  );
};

export default FeaturedPropertiesList;
