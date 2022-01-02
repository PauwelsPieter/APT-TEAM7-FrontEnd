import React from "react";
import ModelList from '../model/list';
import { FaEdit } from 'react-icons/fa';

const BrandItem = ({ car, onEditBrand, onDeleteModel }) => {
    return (
        <div>
            <h3>{car.name}</h3>
            {onEditBrand !== undefined ? <button title={'Edit ' + car.name} onClick={() => onEditBrand(car.id)}><FaEdit /></button> : ''}
            <p>Country: {car.country}</p>
            <p>Founding year: {car.foundingYear}</p>
            <h5>Types:</h5>
            <ModelList models={car.carModels} onDeleteModel={onDeleteModel} />
        </div>
    );
}
export default BrandItem;