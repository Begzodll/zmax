import {Outlet} from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const MainOutlet = () => {
    return(
        <div>
            <Outlet/>
            <Footer/>
        </div>
    )
}
export default MainOutlet