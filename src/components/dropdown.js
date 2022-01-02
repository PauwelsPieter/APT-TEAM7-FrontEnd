import React from "react";

const Dropdown = ({ name, items, onSelect }) => {
    const output = items.map((item, i) => {
        return (
            <option key={i} value={item}>{item}</option>
        );
    });

    return (
        <div className="wrapper-dropdown">
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value='' disabled selected>-- Select {name} --</option>
                {output}
            </select>
        </div>
    );
}
export default Dropdown;