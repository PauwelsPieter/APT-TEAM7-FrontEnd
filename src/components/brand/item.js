import React from "react";
import ModelList from '../model/list'

const BrandItem = ({ car }) => {
    return (
        <div>
            <h3>{car.name}</h3>
            <p>Country: {car.country}</p>
            <p>Founding year: {car.foundingYear}</p>
            <ModelList models={car.carModels} />
        </div>
    );
}
export default BrandItem;