import React, { useState, useEffect } from "react";
import WeaponItem from "./WeaponItem";

const Weapons = () => {
    const [weapons, setWeapons] = useState([]);
    const [text, setText] = useState('');    
    
    const url = new URL('https://mhw-db.com/weapons');
    url.searchParams.set('p', JSON.stringify({
        id: true,
        name: true,
        type: true,
        'assets.image': true,
        'attack.display': true,
        rarity: true,
        damageType: true,
        'crafting.craftingMaterials.quantity': true,        
    }));
    
    useEffect(() => {  
        fetch(url)
        .then(response => response.json())
        .then(data => setWeapons(data));

        // eslint-disable-next-line
    }, []);

    // useEffect(() => {        
    //     // hit MHW weapons get weapons endpoint to get the weapons data
    //     fetch('https://mhw-db.com/weapons')
    //     .then(response => response.json())
    //     .then(data => setWeapons(data));
            

    //     // eslint-disable-next-line
    // }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        //hit TMDB rest API endpoint to search for movie
        fetch(`https://mhw-db.com/weapons?q={"name":"${text}"}`)
        .then(response => response.json())
        .then(data => setWeapons(data));
        // fetch(`https://mhw-db.com/weapons?q={"name":"${text}"}`)
        // .then(response => response.json())
        // .then(data => setWeapons(data));

        setText('');
    }

    const handleChange = (e) => {setText(e.target.value)};

    return(
        <section className="py-5 bg-secondary">            
            <div className="container px-4 px-lg-5 mt-5">
                <h2 className="text-white">Search Weapons: </h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" onChange={handleChange} value={text}/>
                    </form>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">
                    { weapons.map(weapon => <WeaponItem key={weapon.id} weapon={weapon} />) }                    

                    {/* { weapons.map((weapon) => {
                        console.log(weapon.attack);
                    })}
                      */}

                </div>
            </div>
        </section>
    );
}

export default Weapons;