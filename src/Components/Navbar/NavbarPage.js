import {
    NavbarMainContainer,
    NavLogo,
    NavBtn, Container,
    SubText, UnorderedList,
    ListItem, MediaBtn, ReqMediaBtn
} from "./NavbarStyle/NavbarStyle";
import {useEffect, useState} from "react";
import AOS from "aos";

const NavbarPage = () => {

    const [active, setActive] = useState(true)

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <NavbarMainContainer>
            <Container>
                <NavLogo data-aos={'fade-right'} data-aos-duration={'1250'} ><SubText>z</SubText>max movers</NavLogo>
                <UnorderedList bool={active}>
                    <ListItem>Home</ListItem>
                    <ListItem>About</ListItem>
                    <ListItem>Contact</ListItem>
                    <ReqMediaBtn onClick={()=>setActive(p=>!p)}>Request Quote</ReqMediaBtn>
                </UnorderedList>
                <NavBtn data-aos={'fade-left'} data-aos-duration={'1350'} />
                <MediaBtn onClick={() => setActive(p => !p)} bool={active}/>
            </Container>
        </NavbarMainContainer>
    )
}
export default NavbarPage
