import { Component } from 'react'

import { NavBar, NavLogo, NavList, NavItem, NavButton } from './styledComponents'

class Header extends Component {
    render() {
        return (
            <NavBar>
                <NavLogo>Portfolio</NavLogo>
                <NavList>
                    <NavItem>Education</NavItem>
                    <NavItem>Home</NavItem>
                    <NavItem>Projects</NavItem>
                    <NavItem>Contact</NavItem>
                </NavList>
                <NavButton>Hire me!</NavButton>
            </NavBar>
        )
    }
}

export default Header