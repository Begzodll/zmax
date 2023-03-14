import Header from "./Header";
import NavbarPage from "../../Components/Navbar/NavbarPage";
import SubNavbar from "../../Components/Navbar/SubNavbar";
import OurWork from "./OurWork";
import Quote from "../../Components/FormQuote/Quote";
import OurService from "./OurService";
import LocalMoving from "./LocalMoving";
import Process from "./Process";
import Comments from "./Comments";
import TextChanging from "./TextChanging";
import FAQ from "./FAQ";
import Directions from "./Directions";
import MapComponent from "./MapComponent";

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
            <Directions/>
            <TextChanging/>
            <Comments/>
            <FAQ/>
            <MapComponent/>
        </div>
    )
}
export default HomeIndex