import React from "react";
import { animateScroll as scroll } from 'react-scroll';
import { SidebarContainer, Icon, CloseIcon,
        SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {

  const toggleFooter = () => {
    scroll.scrollToBottom();
  }

  return (
    <SidebarContainer isOpen = { isOpen } onClick = { toggle }>
      <Icon onClick = { toggle }>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to = "about" onClick = { toggle }>About</SidebarLink>
          <SidebarLink to = "resume" onClick = { toggle }>Resume</SidebarLink>
          <SidebarLink to = "skill" onClick = { toggle }>Skill</SidebarLink>
          <SidebarLink to = "experience" onClick = { toggle }>Experience</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute onClick = { toggleFooter }>Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
