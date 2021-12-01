import React from "react";
import { Link } from "react-router-dom";

const WeaponItem = (props) => {
    // const [weapons, setImage] = useState([]);

    // fetch(props)
    //   .then(response => response.json())
    //   .then(data => data.map(d => console.log(d.attack?.raw)));

    // .then(response => response.json())
    //   .then(data => data.map(d => console.log(d.attack?.raw)));
    // const image1 = props.map(d => d.attack?.raw);

    // if(props.assets?.image !== undefined){
    //     props.map(d => setImage(console.log(d.assets?.image)))
    // } else {


    // jadi
    let img = {}
    img = ( props?.weapon?.assets?.image);



        // const image = ((props || {}).assets || {}).image;
        // props.map(d => setImage(console.log("")))
      

    // props.map((weapon) => {
    //                     console.log(weapon.attack)});

    // useEffect(() => {          
        
    // fetch(props)
    //   .then(response => response.json())
    //   .then(data => data.map(d => d.assets?.image));
    //   fetch('https://mhw-db.com/weapons')
    //   .then(response => response.json())
    //   .then(data => data.map(d => console.log(d.attack?.raw)));
    
    // eslint-disable-next-line
    // }, []);
    //   weapons.map(weapon => <WeaponItem key={weapon.id} weapon={weapon} />) }                    

    // if(
    //     props && props.weapon && props.weapon.attack && props.weapon.attack.raw
    // ) {
    //     const displays = props.weapon.attack.raw;    
    
    // const imageUrl = 'https://assets.mhw-db.com/weapons';    
    return(
        <div className="col mb-5">
        <div className="card h-100 bg-dark text-white">                            
            <img className="card-img-top border-bottom" src={img} alt={props.weapon.name} />                        
            <div className="card-body p-4">
                <div className="text-center">                   
                    <h5 className="fw-bolder">{props.weapon.name}</h5>                                    
                    {props.weapon.type}
                </div>
            </div>                            
            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center"><Link className="btn btn-outline-light bg-white text-dark  mt-auto text-center" to={`/details/${props.weapon.id}`}>View Detail</Link></div>
            </div>
            {/* { console.log(props.weapon.attack?.raw) }  */}
            {/* { Object.entries(displays).map((display) => {
                        console.log(display);
                    })} */}
                    {/* {console.log(displays)}; */}
                    {/* { console.log(props.map(d => d.assets?.image)) } */}
                    {/* {console.log(props.weapon.assets.image)} */}

                    {/* jadi */}
                    { console.log(img) }
        </div>
    </div>
    );
}

export default WeaponItem;