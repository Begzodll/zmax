import React from "react";
import {Routes, Route} from "react-router-dom";
import HomeIndex from "./Pages/Home/HomeIndex";
import MainOutlet from "./Layout/MainOutlet";

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainOutlet/>}>
                    <Route index element={<HomeIndex/>}/>
                </Route>
            </Routes>
        </div>
    )
}
export default App
