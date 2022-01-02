import React from "react";
import CarList from "./brand/list";
import CreateForm from './brand/create_form'

const AllCars = ({ cars, createBrand, editBrand, updateBrand, deleteModel }) => {
    return (
        <>
            <h2>All cars</h2>
            <CreateForm onCreate={createBrand} />
            <CarList cars={cars} onEditBrand={editBrand} onUpdateBrand={updateBrand} onDeleteModel={deleteModel} />
        </>
    );
}
export default AllCars;