
import React, { Component } from "react";
import product from '../trilliant.json'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';






export default class Filter extends Component {
    render() {
        return (
            <div className="filter">
                <div className="filter-sort">

                    <FormControl  >
                        <label varient="outlined ">Price</label>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.sort}
                            onChange={this.props.sortProducts}
                            label="Age"
                        >
                            <MenuItem value="latest">
                                Latest
                            </MenuItem>
                            <MenuItem value="lowest">Lowest</MenuItem>
                            <MenuItem value="highest">Highest</MenuItem>
                        </Select>
                    </FormControl>

                </div>



                <div className="filter-size">


                    <FormControl >
                        <label varient="outlined ">Size</label>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.size}
                            onChange={this.props.filterProducts}
                            label="Sizes"
                        >

                            <MenuItem value="">ALL</MenuItem>
                            <MenuItem value="XS">XS</MenuItem>
                            <MenuItem value="S">S</MenuItem>
                            <MenuItem value="M">M</MenuItem>
                            <MenuItem value="L">L</MenuItem>
                            <MenuItem value="XL">XL</MenuItem>
                            <MenuItem value="XXL">XXL</MenuItem>
                        </Select>
                    </FormControl>

                    {/* <select value={this.props.size} onChange={this.props.filterProducts}>
                        <option value="">ALL</option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                    </select> */}
                </div>

                {/* <div className="filter-bodytype">
                    Filter{" "}
                    <select value={this.props.bodytype} onChange={this.props.filterBodytype}>
                        <option value="0">ALL</option>
                        <option value="60">Athletic</option>
                        <option value="80">Big and Tall </option>
                        <option value="40">Skinny</option>
                        <option value="100">Large</option>

                    </select>
                </div> */}

                <div className="filter-size">
                    <FormControl >
                        <label varient="outlined ">Type</label>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={this.props.bodytype}
                            onChange={this.props.filterBodytype}
                            label="Sizes"
                        >
                            <MenuItem value="0">ALL</MenuItem>
                            <MenuItem value="60">Athletic</MenuItem>
                            <MenuItem value="80">Big and Tall </MenuItem>
                            <MenuItem value="40">Skinny</MenuItem>
                            <MenuItem value="100">Large</MenuItem>


                        </Select>
                    </FormControl>

                    {/* <div className="filter-gender">
                    Filter{" "}
                    <select value={this.props.gender} onChange={this.props.filterGender}>
                        <option value="">ALL</option>
                        <option value="W">W</option>
                        <option value="M">M</option>

                    </select>
                </div> */}
                </div >
            </div >
        );
    }
}


