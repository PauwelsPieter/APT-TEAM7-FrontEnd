import React,{ Component} from "react";
import { connect } from 'react-redux';

import { loadCarsByModelType, loadCarsEmpty } from "../actions/cars";
import { loadTypes } from "../actions/types";
import ModelsByType from "../components/models_by_type";
import store from "../store";

class ModelsByTypeContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadCarsEmpty());
        store.dispatch(loadTypes());
    }

    render() {
        return (
            <ModelsByType {...this.props} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        types: state.types
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseType: (type) => {
            dispatch(loadCarsByModelType(type));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModelsByTypeContainer);