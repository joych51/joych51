import React from "react";
import { SidebarContainer, Icon, CloseIcon,
        SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
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
          <SidebarRoute to = "/signin">Contact</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
