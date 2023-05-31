import "../index.css"
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/HeaderComponent";
import { useEffect, useState } from "react";

export default function LayoutPage(){
    const [userData, setUserData] = useState({});
    useEffect(() => {
        setUserData(JSON.parse(localStorage.getItem("auth")));
    },[])
    return(
        <>
            <Header isLogged={userData ? true : false} userRol={userData == null ? "none" : userData.rol}/>
            <main><Outlet/></main>
            <Footer/>
        </>
    )
}