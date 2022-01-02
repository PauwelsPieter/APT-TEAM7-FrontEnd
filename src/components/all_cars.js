import React from "react";
import CarList from "./brand/list";
import CreateForm from './brand/create_form'

const AllCars = ({ cars, createBrand }) => {
    return (
        <>
            <h2>All cars</h2>
            <CreateForm onCreate={createBrand} />
            <CarList cars={cars} />
        </>
    );
}
export default AllCars;