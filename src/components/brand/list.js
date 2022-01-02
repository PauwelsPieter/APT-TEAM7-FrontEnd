import React from "react";
import BrandItem from "./item";

const CarList = ({ cars, onDeleteModel}) => {
    const output = cars.map((car, i) => {
        return (
            <div key={i} className="car">
                <BrandItem car={car} onDeleteModel={onDeleteModel} />
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