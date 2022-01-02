import React from "react";
import List from "./brand/list";
import Dropdown from "./dropdown";


const ModelsByYear = ({ cars, years, chooseYear }) => {
    return (
        <>
            <h2>Cars where brand is from country</h2>
            <Dropdown name={"year"} items={years} onSelect={chooseYear} />
            <List cars={cars} />
        </>
    );
}
export default ModelsByYear;