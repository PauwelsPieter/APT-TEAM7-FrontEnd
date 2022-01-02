import React, { Component } from "react";

class CreateForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: '',
            country: '',
            foundingYear: ''
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
            <div className="wrapper-form">
                <h3>Create brand</h3>
                <form onSubmit={this.handleSubmit}>
                    <input required id="name" type="text" placeholder="Enter name" onChange={this.handleChangeName} />
                    <br/>
                    <input required id="country" type="text" placeholder="Enter country" onChange={this.handleChangeCountry} />
                    <br />
                    <input required id="foundingYear" type="text" placeholder="Enter founding year" onChange={this.handleChangeFoundingYear} />
                    <br />
                    <input type="submit" value="Create" />
                </form>
            </div>
        );
    }

    handleSubmit(event) {
        event.preventDefault();

        const brand = {
            name: this.state.name,
            country: this.state.country,
            foundingYear: this.state.foundingYear
        }
        this.props.onCreate(brand);
    }
}
export default CreateForm;