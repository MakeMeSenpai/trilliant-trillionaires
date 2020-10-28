
import React, { Component } from "react";
import product from '../trilliant.json'

export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-sort">
                    Order{" "}
                    <select value={this.props.sort} onChange={this.props.sortProducts}>
                        <option>Latest</option>
                        <option value="lowest">Lowest</option>
                        <option value="highest">Highest</option>
                    </select>
                </div>

                <div className="filter-size">
                    Filter{" "}
                    <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select>
                </div>

                <div className="filter-bodytype">
                    Filter{" "}
                    <select value={this.props.bodytype} onChange={this.props.filterBodytype}>
                        <option value="0">ALL</option>
                        <option value="60">Athletic</option>
                        <option value="80">Big and Tall </option>
                        <option value="40">Skinny</option>
                        <option value="100">Large</option>

                    </select>
                </div>


                <div className="filter-gender">
                    Filter{" "}
                    <select value={this.props.gender} onChange={this.props.filterGender}>
                        <option value="">ALL</option>
                        <option value="W">W</option>
                        <option value="M">M</option>

                    </select>
                </div>
            </div>
        );
    }
}