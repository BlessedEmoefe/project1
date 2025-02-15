import React from "react";
import { FooterStyles } from "./styles";
import { FaFacebookF as Facebook, as FiTwitter } from "react-icons/fa";

const Footer = () => {
  const Socials = [{ name: "facebook", icon: <Facebook /> }];
  return (
    <FooterStyles>
      <div className="copyright">
        <small>copyright Blessed Emoefe Onoriode 2019</small>
      </div>
      <div className="socialMedia">
        {Socials.map((social) => (
          <div className="socialcontainer">
            {social}
          </div>
        ))}
      </div>
    </FooterStyles>
  );
};

export default Footer;
