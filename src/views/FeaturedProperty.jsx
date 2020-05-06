import React from "react";
import Hero from "../components/Hero";
import FeaturedPropertyList from "../components/featured-property/FeaturedPropertiesList";

const LandingPage = () => {
  return (
    <div className="overflow-hidden antialiased">
      <Hero />
      <FeaturedPropertyList />
    </div>
  );
};

export default LandingPage;
