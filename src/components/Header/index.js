import { Component } from "react";

import {
  NavBar,
  NavLogo,
  NavList,
  NavItem,
  NavButton,
  LinkEl,
} from "./styledComponents";

class Header extends Component {
  render() {
    return (
      <NavBar>
        <NavLogo>Portfolio</NavLogo>
        <NavList>
          <NavItem>
            <LinkEl href="#homeSection">Home</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#aboutSection">About</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#projectsSection">Projects</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#">Contact</LinkEl>
          </NavItem>
        </NavList>
        <NavButton>Hire me!</NavButton>
      </NavBar>
    );
  }
}

export default Header;
