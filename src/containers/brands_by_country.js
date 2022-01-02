import React,{ Component} from "react";
import { connect } from 'react-redux';

import { loadCarsByBrandCountry } from "../actions/cars";
import { loadCountries } from "../actions/countries";
import BrandsByCountry from "../components/brands_by_country";
import store from "../store";

class BrandsByCountryContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {

        store.dispatch(loadCountries());
    }

    render() {
        return (
            <BrandsByCountry {...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        countries: state.countries
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseCountry: (country) => {
            dispatch(loadCarsByBrandCountry(country));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandsByCountryContainer);