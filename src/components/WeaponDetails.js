import React from "react";
import { Link } from "react-router-dom";

const WeaponDetails = (props) => {
    let img = {}
    img = ( props?.weapon?.assets?.image);     
    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0 border border-5 shadow" src={img} alt={props.weapon.name} />
                    </div>
                    <div className="col-md-6">
                    <h1 className="display-5 text-white fw-bolder">Name: {props.weapon.name}</h1>                        
                        <div className="fs-5 mb-5 text-white">
                            <span>Type: {props.weapon.type}</span>
                            <br /> 
                            <span>Rarity: {props.weapon.rarity}</span>                                                                                   
                            <br />
                            <span>Damage Type: {props.weapon.damageType}</span>
                            <br />                                          
                            <span>Damage : {props.weapon.attack?.display}</span>
                            <br />
                                                        
                            {/* // crafting.craftingMaterials.item.description */}
                            {/* { props.map(weapon => <div>{weapon.durability.red}</div>) }               */}
                            {/* { weapons.map(weapon => <WeaponItem key={weapon.id} weapon={weapon} />) }*/}
                        </div>                    
                        <div className="d-flex">                        
                            <Link className="btn btn-outline-light flex-shrink-0" to="/">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WeaponDetails;