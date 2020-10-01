
import React, { Component } from "react";

export default class Filter extends Component {

    render() {
        return (
            <div className="filter">
                <div className="filter-result">{this.props.count} Products</div>
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
                        <option value="">ALL</option>
                        <option value="Athletic">Athletic</option>
                        <option value="Tall and Big">Tall and Big </option>
                        <option value="Skinny">Skinny</option>
                        <option value="Large">Large</option>

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