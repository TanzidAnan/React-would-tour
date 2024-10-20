import CountryData from "../CountryData/CountryData";


const CountryDetile = (props) => {
    const {country,hendleVisitedCountery,hendleVisitedFlage} =props;
    return (
        <div>
            <h3>Country Detile</h3>
            {/* <CountryData
            country={country}
            hendleVisitedCountery={hendleVisitedCountery}
            hendleVisitedFlage={hendleVisitedFlage}
            ></CountryData> */}
            <CountryData {...props}></CountryData>
        </div>
    );
};

export default CountryDetile;