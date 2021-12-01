import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Weapons from "../components/Weapons";

const Home = () => {
    return(
        <>
            <Navigation />
            <Header />
            <Weapons />
            <Footer />
        </>
    );
}

export default Home;