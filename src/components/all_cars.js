import React from "react";
import CarList from "./brand/list";
import CreateForm from './brand/create_form'

import { PropagateLoader } from 'react-spinners';

const AllCars = ({ cars, loading, error, createBrand, editBrand, updateBrand, deleteModel }) => {
    const output = () => {
        if (error) {
            return (
                <div className="center">
                    <h2>Sorry! There was an error loading the cars.</h2>
                </div>
            );
        }
        if (loading) {
            return (
                <div className="center">
                    <div className='sweet-loading'>
                        <PropagateLoader
                            color={'#11999e'}
                            size={40}
                            loading={true}
                        />
                    </div>
                </div>
            );
        }
        return (
            <CarList cars={cars} onEditBrand={editBrand} onUpdateBrand={updateBrand} onDeleteModel={deleteModel} />
        );
    }

    return (
        <>
            <h2>All cars</h2>
            <CreateForm onCreate={createBrand} />
            {output()}
        </>
    );
}
export default AllCars;