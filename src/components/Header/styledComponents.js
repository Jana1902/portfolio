import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 9vh;
  width: 80vw;
  color:  ${props => (props.isDark ? '#fff' : '#000')};
  border: 2px solid #000;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 13px;
  padding: 0 10px;
  margin-top: 10px;
`

export const NavLogo = styled.h1`
  font-size: 20px;
  font-family: 'Comfortaa', serif;
  font-weight: 600;
  color: #000;
`

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 15px;
`

export const NavItem = styled.li`
  list-style: none;
  color: ${props => (props.isDark ? '#fff': '#000')};
  cursor: pointer;
  font-size: 14px;
  color: #000;
  font-weight: 600;
`

export const NavButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 12px;
  border-radius: 25px;
  color: ${props => (props.isDark ? '#000': '#000')};
  border: 1px solid ${props => (props.isDark ? '#000': '#000')};
  margin: 0 10px;
  background: transparent;
  font-weight: 600;
`