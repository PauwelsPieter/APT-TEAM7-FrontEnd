import React from "react";
import List from "./brand/list";
import Dropdown from "./dropdown";

import { PropagateLoader } from 'react-spinners';

const ModelsByType = ({ cars, loading, error, types, chooseType }) => {
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
            <List cars={cars} />
        );
    }

    return (
        <>
            <h2>Cars where model is from type</h2>
            <Dropdown name={"type"} items={types} onSelect={chooseType} />
            {output()}
        </>
    );
}
export default ModelsByType;