import React, { useContext } from "react";
import PropertyContext from "../context/PropertyContext";
import {
  HeroWrapper,
  HeroImgContainer,
  ImgOverlay,
  MainWrapper,
  TextWrapper,
  TextContainer,
  HeroHeader,
  HeroSubHeader,
} from "./tailwind_ui/lib";

const Hero = () => {
  const context = useContext(PropertyContext);
  const mapImage = context.map((result) => result.x_featured_media_original);
  const HeroImage = mapImage[0];

  return (
    <>
      <HeroWrapper>
        <HeroImgContainer
          style={{
            backgroundImage: `url('${HeroImage}')`,
          }}
        >
          <ImgOverlay id="blackOverlay"></ImgOverlay>
        </HeroImgContainer>
        <MainWrapper>
          <TextWrapper>
            <TextContainer>
              <HeroHeader>Your story starts with us.</HeroHeader>
              <HeroSubHeader>
                This is a simple example of a Landing Page you can build using
                Tailwind Starter Kit. It features multiple CSS components based
                on the Tailwindcss design system.
              </HeroSubHeader>
            </TextContainer>
          </TextWrapper>
        </MainWrapper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
