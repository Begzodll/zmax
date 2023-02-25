import React from "react";
import {Routes, Route} from "react-router-dom";
import HomeIndex from "./Pages/Home/HomeIndex";

const App = () => {
    return(
        <div>
            <Routes>
                <Route path={'/'} element={<HomeIndex/>}/>
            </Routes>
        </div>
    )
}
export default App
