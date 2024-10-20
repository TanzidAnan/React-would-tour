import { useEffect } from "react";
import { useState } from "react";
import Country from "../Contry/Country";
import './Countries.css'

const Countries = () => {
    const [countris, setCountris] = useState([]);
    const [visitedCountery, setvisitedCountery] =useState([]);
    const [visitedFlage,setVisitedFlage] =useState([])
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data => setCountris(data))
    }, []);
    const hendleVisitedCountery = countery =>{
        const newVisitedCountry =[...visitedCountery, countery];
        setvisitedCountery(newVisitedCountry)
    }

    const hendleVisitedFlage = flage =>{
        const newVisitedFlage =[...visitedFlage,flage];
        setVisitedFlage(newVisitedFlage)
    }

    return (
        <div>
            <h3>Countries: {countris.length}</h3>
            <div>
                <h3>visited Country  {visitedCountery.length}</h3>
                <ul>
                {
                    visitedCountery.map(countri => <li key={countri.cca3}>{countri.name.common}</li>)
                }
                </ul>
            </div>
            <div>
                <h3>visited countery {visitedFlage.length}</h3>
                <div className="flage-container">
                {
                    visitedFlage.map((flage,idx) =><img key={idx} src={flage}></img>)
                }
                </div>
            </div>
            <div className="country-conterner">
                {
                    countris.map(countris => <Country
                         key={countris.cca3} 
                         country={countris}
                         hendleVisitedCountery={hendleVisitedCountery}
                         hendleVisitedFlage={hendleVisitedFlage}
                         ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;