import React from "react";
import List from "./brand/list";
import Dropdown from "./dropdown";

import { PropagateLoader } from 'react-spinners';

const BrandsByCountry = ({ cars, loading, error, countries, chooseCountry }) => {
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
            <h2>Cars where brand is from country</h2>
            <Dropdown name={"country"} items={countries} onSelect={chooseCountry} />
            {output()}
        </>
    );
}
export default BrandsByCountry;