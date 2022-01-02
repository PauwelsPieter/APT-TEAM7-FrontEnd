import React, { Component } from "react";
import ModelList from '../model/list';
import { FaEdit } from 'react-icons/fa';
import { updateBrand } from "../../actions/cars";

class EditForm extends Component {
    constructor(props) {
        super();

        this.state = {
            id: props.brand.id,
            name: props.brand.name,
            country: props.brand.country,
            foundingYear: props.brand.foundingYear
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleChangeFoundingYear = this.handleChangeFoundingYear.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        });
    }

    handleChangeCountry(event) {
        this.setState({
            country: event.target.value
        });
    }

    handleChangeFoundingYear(event) {
        this.setState({
            foundingYear: event.target.value
        });
    }

    render() {
        return (
            <div className="wrapper-update-form">
                <h3>Update brand</h3>
                <form onSubmit={this.handleSubmit}>
                    <input required id="name" type="text" placeholder="Enter name" value={this.state.name} onChange={this.handleChangeName} />
                    <br />
                    <input required id="country" type="text" placeholder="Enter country" value={this.state.country} onChange={this.handleChangeCountry} />
                    <br />
                    <input required id="foundingYear" type="text" placeholder="Enter founding year" value={this.state.foundingYear} onChange={this.handleChangeFoundingYear} />
                    <br />
                    <input type="submit" value="Update" />
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        let updatedBrand = this.props.brand;
        updatedBrand.name = this.state.name;
        updatedBrand.country = this.state.country;
        updatedBrand.foundingYear = this.state.foundingYear;

        this.props.onUpdate(updatedBrand);
    }
}
export default EditForm;