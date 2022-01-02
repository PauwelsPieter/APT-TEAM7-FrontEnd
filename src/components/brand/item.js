import React from "react";
import ModelList from '../model/list'

const BrandItem = ({ car }) => {
    return (
        <div>
            <h3>{car.name}</h3>
            <p>Country: {car.country}</p>
            <p>Founding year: {car.foundingYear}</p>
            <h5>Types:</h5>
            <ModelList models={car.carModels} />
        </div>
    );
}
export default BrandItem;