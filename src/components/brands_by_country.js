import React from "react";
import List from "./brand/list";
import Dropdown from "./dropdown";

const BrandsByCountry = ({ cars, countries, chooseCountry }) => {
    return (
        <>
            <h2>Cars where brand is from country</h2>
            <Dropdown name={"country"} items={countries} onSelect={chooseCountry} />
            <List cars={cars} />
        </>
    );
}
export default BrandsByCountry;