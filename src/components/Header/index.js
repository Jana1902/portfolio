import {Component} from 'react'

import AppContext from '../../context/AppContext'

import {NavBar, NavLogo, NavList, NavItem, NavButton} from './styledComponents'

class Header extends Component {
    render(){
        return (
            <AppContext.Consumer>
                {value => {
                    const {isDark} = value
                    return (
                        <NavBar isDark={isDark}>
                            <NavLogo isDark={isDark}>Portfolio</NavLogo>
                            <NavList>
                                <NavItem isDark={isDark}>Home</NavItem>
                                <NavItem isDark={isDark}>Education</NavItem>
                                <NavItem isDark={isDark}>Projects</NavItem>
                                <NavItem isDark={isDark}>Contact</NavItem>
                            </NavList>
                            <NavButton isDark={isDark}>Hire me!</NavButton>
                        </NavBar>
                    )}}
            </AppContext.Consumer>
        )
    }
}

export default Header