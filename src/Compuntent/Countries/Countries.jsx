import { useEffect } from "react";
import { useState } from "react";
import Country from "../Contry/Country";

const Countries = () => {
    const [countris,setCountris] =useState([]);
    useEffect(() =>{
        fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data => setCountris(data))
    },[]);
    console.log(countris)
    return (
        <div>
            <h3>Countries: {countris.length}</h3>
            {
                countris.map(countris => <Country country={countris}></Country>)
            }
        </div>
    );
};

export default Countries;