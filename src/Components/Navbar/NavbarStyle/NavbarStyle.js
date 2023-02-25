import styled from "styled-components";

// Sub Navbar

export const SubNavbarContainer = styled.div`
  width: 100%;
  height: 30px;
  background: #05befd;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7%;
  transition: 1s all ease;
  z-index: 3;
  @media (max-width: 650px) {
    flex-direction: column;
    height: auto;
    justify-content: center;
    align-items: center;
  }
`
export const TextItem = styled.p`
  text-decoration: none;
  color: #ffff;
`
export const TellTo = styled.a`
  text-decoration: none;
  position: relative;
  color: #ffff;
  @media (max-width: 650px) {
    text-align: center;
  }
`
export const MailTo = styled.a`
  text-decoration: none;
  position: relative;
  color: #ffff;
  margin: 0 3rem;
  @media (max-width: 650px) {
    text-align: center;
    margin: 5px 0;
  }
`
export const ContactSocialMedia = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

// Navbar
export const NavbarMainContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 5;
`
export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const NavLogo = styled.div`
  font-size: 25px;
  text-transform: uppercase;
  color: #414141;
  border-bottom: 3px solid #05befd;
  line-height: 18px;
  z-index: 3;
`
export const NavBtn = styled.button`
  width: 20%;
  height: 30px;
  background: transparent;
  border-radius: 3px;
  position: relative;
  overflow: hidden;
  border: 1px solid #ccc;
  cursor: pointer;

  &::before {
    content: "Request Quote";
    position: absolute;
    text-transform: uppercase;
    top: 8%;
    left: 18%;
    color: #05befd;
    transition: .9s ease;
  }

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    background: #05befd;
    transition: .5s ease;
  }

  &:hover {
    &::before {
      color: #fff;
      z-index: 99;
    }

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 992px) {
    display: none;
  }
`
export const SubText = styled.span`
  color: #05befd;
  font-size: 35px;
  position: relative;
  bottom: -3px;
`
export const UnorderedList = styled.ul`
  display: flex;
  transition: 1s all ease;
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: ${({bool}) => bool ? `-100% ` : `0`};
    left: 0;
    background: #FFFDFA ;

  }
`
export const ListItem = styled.li`
  margin: 0 1rem;
  text-transform: uppercase;
 
  @media (max-width: 992px) {
    color: #414141;
    margin: 1.2rem 0;
  }
`
export const MediaBtn = styled.button`
  position: relative;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  transition: .2s;
  width: 30px;
  height: 25px;
  display: none;
  margin: 1.8rem 0;
  z-index: 100;
  outline: none;
  border: none;
  background: transparent;
  @media (max-width: 992px) {
    display: flex;
  }

  &:before {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5px;
    background: #05befd;
    transition: .2s;
    outline: none;
    box-shadow: 0 10px 0 #05befd;
    ${({bool}) => bool
            ? `transform: translateY(-10px); `
            : `transform: translateY(0) rotate(45deg);
              box-shadow: 0 0 0 #fff;`};
  }

  &::after {
    content: '';
    position: absolute;
    width: 1.5rem;
    height: 1.5px;
    outline: none;
    background: #05befd;
    transition: .2s;
    ${({bool}) => bool
            ? `transform: translateY(10px); `
            : `transform: translateY(0) rotate(-45deg);`};
  }
`
export const ReqMediaBtn = styled.button`
  width: auto;
  padding: 8px 2rem;
  text-transform: uppercase;
  background: transparent;
  border-radius: 5px;
  color: #fff;
  text-align: center;
  border: 1px solid #05befd;
  outline: none;
  display: none;
  @media(max-width: 992px){
    display: block;
    color:#414141;
  }
`