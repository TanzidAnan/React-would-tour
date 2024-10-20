
const Country = ({country}) => {
    // console.log(country)
    const {name} =country;
    return (
        <div>
            <h5>Name:{name?.common} </h5>
        </div>
    );
};

export default Country;