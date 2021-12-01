import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
    return(
        <>
            <Navigation />            
                <div className="container my-5 text-white">
                <   h1>Final Project Webpro</h1>    
                <div className="container ms-5">
                    <h2>Name:       Tumulo, Septiano Rivo Chandra</h2>    
                    <h2>NIM:        105011910037</h2>
                    <h2>Subject:    Web Programming</h2>                
                    <h2>Faculty: Computer Science</h2>
                    <p>Aplikasi ini menggunakan Api dari Game Monster Hunter World, yang dimana dilebih khususkan ke atribut weapon/senjatanya</p>                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default About;