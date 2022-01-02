import React from "react";
import CarList from "./brand/list";

const AllCars = ({ cars }) => {
    return (
        <>
            <h2>All cars</h2>
            <CarList cars={cars} />
        </>
    );
}
export default AllCars;