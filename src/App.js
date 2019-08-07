import React, { Component } from "react";
import { connect } from "react-redux";
import * as locationAction from "./actions/locationAction";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      countries: "",
      states: "",
      cities: ""
    };
  }

  handleChange(e) {
    let nam = e.target.name;
    let val = e.target.value;
    this.setState({ [nam]: val });
  }

  handleSubmit(e) {
    e.preventDefault();
    // let Countries = this.state.countries;
    // let States = this.state.states;
    // let Cities = this.state.cities;
    let Location = {
      countries: this.state.countries,
      states: this.state.states,
      cities: this.state.cities
    };
    console.log(Location.countries);
    console.log(Location.states);
    console.log(Location.cities);
    this.props.applyResult(Location);
  }

  render() {
    //let name;
    return (
      <div>
        <h1>Location Application</h1>
        <hr />
        {/* <ul>
          {this.props.contacts.map((contact, i) => <li key={i}>{contact.name}</li> )}
        </ul> */}
        <div>
          <h3>Add Contact Form</h3>
          <form onSubmit={this.handleSubmit}>
            <h4>Select Countries</h4>
            <input type="text" name="countries" onChange={this.handleChange} />
            <h4>Select States</h4>
            <input type="text" name="states" onChange={this.handleChange} />
            <h4>Select Cities</h4>
            <input type="text" name="cities" onChange={this.handleChange} />
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  countries: state.Locations.countries,
  states: state.Locations.states,
  cities: state.Locations.cities
});
const mapDispatchToProps = dispatch => {
  return {
    applyResult: Location => dispatch(locationAction.applyResult(Location))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
