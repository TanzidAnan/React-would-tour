import { useEffect } from "react";
import { useState } from "react";
import Country from "../Contry/Country";
import './Countries.css'

const Countries = () => {
    const [countris, setCountris] = useState([]);
    const [visitedCountery, setvisitedCountery] =useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountris(data))
    }, []);
    const hendleVisitedCountery = countery =>{
        console.log(54545)
        console.log(countery)
    }
     console.log(countris)
    return (
        <div>
            <h3>Countries: {countris.length}</h3>
            <div>
                <h3>visited Country</h3>
                <ul>

                </ul>
            </div>
            <div className="country-conterner">
                {
                    countris.map(countris => <Country
                         key={countris.cca2} 
                         country={countris}
                         hendleVisitedCountery={hendleVisitedCountery}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;