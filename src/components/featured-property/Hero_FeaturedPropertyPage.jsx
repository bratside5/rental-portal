import React from "react";
import {
  HeroWrapper,
  HeroImgContainer,
  ImgOverlay,
  MainWrapper,
  TextWrapper,
  TextContainer,
  HeroHeader,
  HeroSubHeader,
} from "../tailwind_ui/lib";

function FeaturedPropertyHeroImage({ item }) {
  return (
    <>
      <HeroWrapper>
        <HeroImgContainer
          style={{
            backgroundImage: `url('${item.x_featured_media_original}')`,
          }}
        >
          <ImgOverlay id="blackOverlay"></ImgOverlay>
        </HeroImgContainer>
        <MainWrapper>
          <TextWrapper>
            <TextContainer>
              <HeroHeader>{item.acf.title}</HeroHeader>
              <HeroSubHeader>{item.acf.subheading}</HeroSubHeader>
            </TextContainer>
          </TextWrapper>
        </MainWrapper>
      </HeroWrapper>
    </>
  );
}

export default FeaturedPropertyHeroImage;
