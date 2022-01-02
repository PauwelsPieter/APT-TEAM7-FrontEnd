import React,{ Component} from "react";
import { connect } from 'react-redux';

import { loadCarsByModelYear } from "../actions/cars";
import { loadYears } from "../actions/years";
import ModelsByYear from "../components/models_by_year";
import store from "../store";

class ModelsByYearContainer extends Component {
    constructor(props) {
        super();
    }

    componentDidMount() {
        store.dispatch(loadYears());
    }

    render() {
        return (
            <>
                <ModelsByYear {...this.props} />
            </>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        cars: state.cars,
        years: state.years
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        chooseYear: (year) => {
            dispatch(loadCarsByModelYear(year));
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(ModelsByYearContainer);