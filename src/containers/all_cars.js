import React,{ Component} from "react";
import { connect } from 'react-redux';

import { createBrand, deleteModel, editBrand, loadCars, updateBrand } from "../actions/cars";
import AllCars from "../components/all_cars";
import store from "../store";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AllCarsContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadCars());
    }

    render() {
        return (
            <>
                <AllCars {...this.props} />
                <ToastContainer autoClose={3000} pauseOnHover={false} />
            </>
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
        },
        editBrand: (brandId) => {
            dispatch(editBrand(brandId));
        },
        updateBrand: (brand) => {
            dispatch(updateBrand(brand))
        },
        deleteModel: (modelId) => {
            dispatch(deleteModel(modelId));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCarsContainer);