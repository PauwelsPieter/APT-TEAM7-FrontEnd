import React from "react";

const Year = ({ years, onSelect }) => {
    const output = years.map((year, i) => {
        return (
            <option key={i} value={year}>{year}</option>
        );
    });

    return (
        <div>
            <select onChange={(e) => onSelect(e.target.value)}>
                <option value='' disabled selected>-- Select year --</option>
                {output}
            </select>
        </div>
    );
}
export default Year;