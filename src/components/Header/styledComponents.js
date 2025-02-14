import styled from 'styled-components'

export const NavBar = styled.nav`
  height: 10vh;
  width: 100vw;
  color: #fff;
  backdrop-filter: blur(40px);
  -webkit-backdrop-filter: blur(20px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 3;

  @media screen and (min-width: 768px){
    width: 80vw;
  }
`

export const NavLogo = styled.h1`
    font-size: 28px;
  background: -webkit-linear-gradient(180deg, #BB86FC, #03DAC6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
  // color: #BB86FC;
`

export const NavList = styled.ul`
  display: none;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 15px;

  @media screen and (min-width: 768px){
    display: flex;
  };
`

export const NavItem = styled.li`
  list-style: none;
  color: #E0E0E0;
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;

  &:hover {
    color: #03DAC6;
    text-shadow: 0 0 10px rgb(139, 89, 200);
    transition: 0.2s; 
  }
`

export const LinkEl = styled.a`
  color: inherit;
  text-decoration: none;
`

export const NavButton = styled.button`
  width: 80px;
  height: 35px;
  font-size: 12px;
  border-radius: 25px;
  color: #BB86FC;
  border: 1px solid #BB86FC;
  margin: 0 10px;
  background: transparent;
  font-weight: 400;

  &:hover {
    background-color: #BB86FC;
    color: #121212;
    cursor: pointer;
    transition: .3s;
  }
`