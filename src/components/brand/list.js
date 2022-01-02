import React from "react";
import EditForm from "./edit_form";
import BrandItem from "./item";

const CarList = ({ cars, onEditBrand, onUpdateBrand, onDeleteModel}) => {
    const output = cars.map((car, i) => {
        return (
            <div key={i} className="car">
                {car.isEditing ? <EditForm brand={car} onUpdate={onUpdateBrand} /> : <BrandItem car={car} onEditBrand={onEditBrand} onDeleteModel={onDeleteModel} />}
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