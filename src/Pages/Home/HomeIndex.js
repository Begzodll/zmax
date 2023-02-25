import Header from "./Header";
import NavbarPage from "../../Components/Navbar/NavbarPage";
import SubNavbar from "../../Components/Navbar/SubNavbar";
import OurWork from "./OurWork";
import Quote from "../../Components/FormQuote/Quote";
import OurService from "./OurService";
import LocalMoving from "./LocalMoving";
import Process from "./Process";

const HomeIndex = () => {
    return(
        <div>
            <SubNavbar/>
            <NavbarPage/>
            <Header/>
            <Quote/>
            <OurWork/>
            <OurService/>
            <LocalMoving/>
            <Process/>
        </div>
    )
}
export default HomeIndex