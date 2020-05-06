import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition } from "react-spring";
import NavigationMenu from "./NavigationMenu";
import { NavBar, Span, MenuFadeIn, MenuFadeOut } from "../tailwind_ui/lib";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  const maskTransitions = useTransition(showMenu, null, {
    from: { position: "absolute", opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const menuTransitions = useTransition(showMenu, null, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <NavBar>
      <Span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </Span>

      {maskTransitions.map(
        ({ item, key, props }) =>
          item && (
            <MenuFadeIn
              onClick={() => setShowMenu(false)}
              key={key}
              style={props}
            ></MenuFadeIn>
          )
      )}

      {menuTransitions.map(
        ({ item, key, props }) =>
          item && (
            <MenuFadeOut key={key} style={props}>
              <NavigationMenu closeMenu={() => setShowMenu(false)} />
            </MenuFadeOut>
          )
      )}
    </NavBar>
  );
}

export default Navigation;
