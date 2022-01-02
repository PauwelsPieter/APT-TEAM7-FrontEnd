import React from "react";

const ModelItem = ({ model }) => {
    return (
        <div>
            <h5>{model.name}</h5>
            <p>Type: {model.type}</p>
            <p>Year: {model.year}</p>
            <p>Engine: {model.engine}</p>
        </div>
    );
}
export default ModelItem;