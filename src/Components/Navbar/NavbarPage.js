import {
    NavbarMainContainer,
    NavLogo,
    NavBtn, Container,
    SubText, UnorderedList,
    ListItem, MediaBtn, ReqMediaBtn
} from "./NavbarStyle/NavbarStyle";
import {useState} from "react";

const NavbarPage = () => {

    const [active, setActive] = useState(true)

    return (
        <NavbarMainContainer>
            <Container>
                <NavLogo><SubText>z</SubText>max movers</NavLogo>
                <UnorderedList bool={active}>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Contact</ListItem>
                    <ReqMediaBtn onClick={()=>setActive(p=>!p)}>Request Quote</ReqMediaBtn>
                </UnorderedList>
                <NavBtn/>
                <MediaBtn onClick={() => setActive(p => !p)} bool={active}/>
            </Container>
        </NavbarMainContainer>
    )
}
export default NavbarPage
