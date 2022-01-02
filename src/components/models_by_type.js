import React from "react";
import List from "./brand/list";
import Type from "./dropdown/type";


const ModelsByType = ({ cars, types, chooseType }) => {
    return (
        <>
            <h2>Cars where model is from type</h2>
            <Type types={types} onSelect={chooseType} />
            <List cars={cars} />
        </>
    );
}
export default ModelsByType;