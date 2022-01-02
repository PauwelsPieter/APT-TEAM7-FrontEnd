import React from "react";
import List from "./brand/list";
import Country from "./dropdown/country";

const BrandsByCountry = ({ cars, countries, chooseCountry }) => {
    return (
        <>
            <h2>Cars where brand is from country</h2>
            <Country countries={countries} onSelect={chooseCountry} />
            <List cars={cars} />
        </>
    );
}
export default BrandsByCountry;