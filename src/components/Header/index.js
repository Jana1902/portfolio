import { Component } from "react";

import {FaLinkedin, FaGithub} from 'react-icons/fa'

import {
  NavBar,
  NavLogo,
  NavList,
  NavItem,
  LinkEl,
} from "./styledComponents";

class Header extends Component {
  render() {
    return (
      <NavBar>
        <NavLogo>Portfolio</NavLogo>
        <NavList>
          <NavItem>
            <LinkEl href="#">Home</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#aboutSection">About</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#projectsSection">Projects</LinkEl>
          </NavItem>
          <NavItem>
            <LinkEl href="#contactSection">Contact</LinkEl>
          </NavItem>
        </NavList>
        <ul className="social-links">
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/-janardhanan/" target="_blank">
                  <FaLinkedin />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://github.com/Jana1902" target="_blank">
                  <FaGithub />
                </a>
              </li>
            </ul>
      </NavBar>
    );
  }
}

export default Header;
