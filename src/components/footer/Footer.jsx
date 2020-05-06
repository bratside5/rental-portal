import React from "react";
import { FooterWrapper } from "../tailwind_ui/lib";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <small>
          You are running this application in <b>{process.env.NODE_ENV}</b>{" "}
          mode.
        </small>
      </FooterWrapper>
    </>
  );
};

export default Footer;
