import React,{ Component} from "react";
import { connect } from 'react-redux';

import { createBrand, loadCars } from "../actions/cars";
import AllCars from "../components/all_cars";
import store from "../store";

class AllCarsContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadCars());
    }

    render() {
        return (
            <AllCars {...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        createBrand: (brand) => {
            dispatch(createBrand(brand));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCarsContainer);