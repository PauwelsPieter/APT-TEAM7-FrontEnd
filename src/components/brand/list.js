import React from "react";
import BrandItem from "./item";

const CarList = ({cars}) => {
    const output = cars.map((car, i) => {
        return (
            <div key={i}>
                <BrandItem car={car} />
            </div>
        );
    });

    return (
        <div>
            {output}
        </div>
    );
}
export default CarList;