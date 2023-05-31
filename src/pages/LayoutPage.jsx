import "../index.css"
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/header/HeaderComponent";

export default function LayoutPage(){
    return(
        <>
            <Header/>
            <main><Outlet/></main>
            <Footer/>
        </>
    )
}