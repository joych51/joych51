import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks,
  NavBtn, NavBtnLink } from './NavbarElements';

  const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
      if(window.scrollY >= 80) setScrollNav(true);
      else setScrollNav(false);
    }

    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    const toggleFooter = () => {
      scroll.scrollToBottom();
    }

    return (
      <>
        <IconContext.Provider value = {{ color: '#fff'}}>
          <Nav scrollNav = { scrollNav }>
            <NavbarContainer>
              <NavLogo to = "/" onClick = { toggleHome }>Eddie Lee</NavLogo>
              <MobileIcon onClick = { toggle }> <FaBars /> </MobileIcon>
              <NavMenu>
                <NavItem> <NavLinks to = "about" smooth = { true } duration = { 500 } spy = { true } exact = 'true' offset ={ -80 }>About</NavLinks> </NavItem>
                <NavItem> <NavLinks to = "resume" smooth = { true } duration = { 500 } spy = { true } exact = 'true' offset ={ -80 }>Resume</NavLinks> </NavItem>
                <NavItem> <NavLinks to = "skill" smooth = { true } duration = { 500 } spy = { true } exact = 'true' offset ={ -80 }>Skill</NavLinks> </NavItem>
                <NavItem> <NavLinks to = "experience" smooth = { true } duration = { 500 } spy = { true } exact = 'true' offset ={ -80 }>Experience</NavLinks> </NavItem>
              </NavMenu>
              <NavBtn onClick = { toggleFooter }> <NavBtnLink>Contact</NavBtnLink> </NavBtn>
            </NavbarContainer>
          </Nav>
        </IconContext.Provider>
      </>
    );
  };

  export default Navbar;
