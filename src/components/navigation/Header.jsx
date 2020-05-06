import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
import { HeaderClass, BrandLink } from "../tailwind_ui/lib";

function Header() {
  return (
    <HeaderClass className="border-b p-3 flex justify-between items-center">
      <BrandLink>
        <Link to="/">AppName</Link>
      </BrandLink>

      <Navigation />
    </HeaderClass>
  );
}

export default Header;
