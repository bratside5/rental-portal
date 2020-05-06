import React, { useContext } from "react";
import PropertyContext from "../../context/PropertyContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  faMountain,
  faTree,
  // faSnowboarding,
  faSnowflake,
} from "@fortawesome/free-solid-svg-icons";
import Tags from "../Tags";

import {
  CardWrapper,
  CardImage,
  CardBody,
  CardList,
  CardTitle,
  CardPrice,
  CardSubHeading,
  Divider,
  IconContainer,
  CardIcons,
  IconText,
} from "../tailwind_ui/lib";

const FeaturedPropertyCard = (props) => {
  const propertyData = useContext(PropertyContext);
  return (
    <>
      {propertyData.map((result, index) => (
        <CardWrapper key={index}>
          <Link to={`/featured-properties/${result.id}`}>
            <CardImage src={result.x_featured_media_original} />
            <CardBody>
              <CardList>3 Beds / 2 Baths</CardList>
              <CardTitle>{result.acf.title}</CardTitle>
              <CardPrice>From £{result.acf.price} / wk</CardPrice>
              <CardSubHeading>
                {result.acf.product_description}... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas, corrupti?
              </CardSubHeading>
              <Divider />
              <IconContainer>
                <CardIcons>
                  <FontAwesomeIcon icon={faMountain} />
                  <IconText>3536m Highest Altitude</IconText>
                </CardIcons>
                <CardIcons>
                  <FontAwesomeIcon icon={faTree} />
                  <IconText>Stunning Scenery</IconText>
                </CardIcons>
                <CardIcons>
                  <FontAwesomeIcon icon={faSnowflake} />
                  <IconText>Snow Sure</IconText>
                </CardIcons>
              </IconContainer>
              <Divider />
              <Tags result={result} />
            </CardBody>
          </Link>
        </CardWrapper>
      ))}
    </>
  );
};

export default FeaturedPropertyCard;
