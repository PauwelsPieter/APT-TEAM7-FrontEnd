import React from "react";

const Type = ({ types, onSelect }) => {
    const output = types.map((type, i) => {
        return (
            <option key={i} value={type}>{type}</option>
        );
    });

    return (
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value='' disabled selected>-- Select type --</option>
                {output}
            </select>
        </div>
    );
}
export default Type;