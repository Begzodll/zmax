import {SubNavbarContainer,ContactSocialMedia, TextItem, TellTo, MailTo} from "./NavbarStyle/NavbarStyle";
import emailPng from '../../Assests/Media/png/email.png';
import phonePng from '../../Assests/Media/png/phone-call.png';

const SubNavbar = () => {
    return (
        <SubNavbarContainer>
            <ContactSocialMedia>
                <TellTo href={'tel:+17039017561'} png={emailPng}>703-901-7561</TellTo>
                <MailTo href={'mailto:zmaxmovers@gmail.com'} png={phonePng}>zmaxmovers@gmail.com</MailTo>
            </ContactSocialMedia>
            <TextItem>Mon-Sun: 9:00 - 18:00 </TextItem>
        </SubNavbarContainer>
    )
}
export default SubNavbar