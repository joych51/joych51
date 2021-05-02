import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FooterContainer, FooterWrap, FooterLinkContainer, FooterLinkWrapper, FooterLinkItems, FooterLinkTitle,
    FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>

              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to = "https://www.instagram.com/joych51/">Instagram</FooterLink>
                <FooterLink to = "https://www.facebook.com/junsoeng.lee">Facebook</FooterLink>
                <FooterLink to = "https://www.linkedin.com/in/junsoeng-lee-6745791b2/">LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to = '/' onClick = { toggleHome }>Eddie Lee</SocialLogo>
            <WebsiteRights>Eddie ⓒ { new Date().getFullYear() } All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href ="https://www.facebook.com/junsoeng.lee" target = "_blank" aria-label = "Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href ="https://www.instagram.com/joych51/" target = "_blank" aria-label = "Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href ="https://www.linkedin.com/in/junsoeng-lee-6745791b2/" target = "_blank" aria-label = "LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
              </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
