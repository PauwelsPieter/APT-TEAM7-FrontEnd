import React from "react";
import List from "./brand/list";
import Dropdown from "./dropdown";


const ModelsByType = ({ cars, types, chooseType }) => {
    return (
        <>
            <h2>Cars where model is from type</h2>
            <Dropdown name={"type"} items={types} onSelect={chooseType} />
            <List cars={cars} />
        </>
    );
}
export default ModelsByType;