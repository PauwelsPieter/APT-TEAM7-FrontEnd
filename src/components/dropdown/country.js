import React from "react";

const Country = ({ countries, onSelect }) => {
    const output = countries.map((country, i) => {
        return (
            <option key={i} value={country}>{country}</option>
        );
    });

    return (
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value='' disabled selected>-- Select country --</option>
                {output}
            </select>
        </div>
    );
}
export default Country;