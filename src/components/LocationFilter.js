import React, { Component } from "react";
import { connect } from "react-redux";
import * as locationAction from "../actions/locationAction";
import "./LocationFilter.css";
class LocationFilter extends Component {
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
  listView(data, index) {
    return (
      <div className="row">
        <div className="col-md-10">
          <li key={index} className="list-group-item clearfix">
            Country: {data.countries} State: {data.states} City:
            {data.cities}
          </li>
        </div>
      </div>
    );
  }
  render() {
    //let name;
    return (
      <div>
        <h3>Filters</h3>
        <hr />
        <form onSubmit={this.handleSubmit}>
          <h5>Select Countries</h5>
          <select value={this.state.countries}>
            <option value="India">India</option>
            <option value="Austrlia">Austrlia</option>
            <option value="Pakistan">Pakistan</option>
          </select>
          <h5>Select States</h5>
          <input type="text" name="states" onChange={this.handleChange} />
          <h5>Select Cities</h5>
          <input type="text" name="cities" onChange={this.handleChange} />
          <br />
          <input type="submit" />
        </form>
        <ul className="list-group">
          {this.props.Locations.map((contact, i) => this.listView(contact, i))}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  Locations: state.Locations
});
const mapDispatchToProps = dispatch => {
  return {
    applyResult: Location => dispatch(locationAction.applyResult(Location))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationFilter);
