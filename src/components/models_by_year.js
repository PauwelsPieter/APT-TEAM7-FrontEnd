import React from "react";
import List from "./brand/list";
import Year from "./dropdown/year";


const ModelsByYear = ({ cars, years, chooseYear }) => {
    return (
        <>
            <h2>Cars where brand is from country</h2>
            <Year years={years} onSelect={chooseYear} />
            <List cars={cars} />
        </>
    );
}
export default ModelsByYear;