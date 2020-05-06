import React from "react";
import { Link } from "react-router-dom";
import { NavBrand, NavLinks, NavList, NavWrapper } from "../tailwind_ui/lib";
import { NavbarAuth } from "./NavigationAuth";

function NavigationMenu(props) {
  return (
    <NavWrapper>
      <NavBrand className="font-bold py-3">AppName</NavBrand>
      <NavList>
        <NavLinks>
          <Link
            to="/"
            className="text-blue-500 py-3 border-t border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </NavLinks>
        <NavLinks>
          <Link
            to="/featured-properties"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Featured Properties
          </Link>
        </NavLinks>
        <NavLinks>
          <Link
            to="/featured-properties"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Latest Deals
          </Link>
        </NavLinks>
        <NavLinks>
          <Link
            to="/latest-news"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Local News
          </Link>
        </NavLinks>
        <NavLinks>
          <Link
            to="/featured-properties"
            className="text-blue-500 py-3 border-b block"
            onClick={props.closeMenu}
          >
            Seasonal Rentals
          </Link>
        </NavLinks>
      </NavList>
      <NavbarAuth />
    </NavWrapper>
  );
}

export default NavigationMenu;
