import './App.scss'
import SideBar from "./components/sideBar/sideBar.jsx";
import Pricing from "./pages/pricing/pricing.jsx";
import Catalog from "./pages/catalog/catalog.jsx";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/header/header.jsx";
import Statistics from "./pages/statistics/statistics.jsx";
import Applications from "./pages/applications/applications.jsx";
import CreateApplication from "./components/createApplication/createApplication.jsx";
import React from "react";
import Clients from "./pages/clients/clients.jsx";
import Login from "./pages/login/login.jsx";

function App() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return <div className='container'>
        <div className='wrapper G-flex'>
            {!isLoginPage && <SideBar />}

            <main className='main'>
                <Routes>
                    <Route path="/pricing" element={<Pricing/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/applications" element={<Applications/>}/>
                    <Route path="/clients" element={<Clients/>}/>
                    <Route path="/login" element={<Login/>}/>


                </Routes>


            </main>


        </div>
    </div>


}

export default App
