import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import WeaponDetails from "../components/WeaponDetails";

const Details = () => {    
    const { weaponId } = useParams();
    const [weapon, setWeapon] = useState({});
    
    useEffect(() => {
        //hit TMDB endpoint to get details of a movie
        fetch(`https://mhw-db.com/weapons/${weaponId}`)
        .then(response => response.json())
        .then(data => setWeapon(data));
        }, 
        //eslint-disable-next-line
    []);

    return(
        <>
            <Navigation />
            <WeaponDetails weapon={weapon} />
            <Footer />
        </>
    );
}

export default Details;