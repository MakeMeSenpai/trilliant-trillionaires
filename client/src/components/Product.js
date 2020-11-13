import React, { Component } from "react";
import formatCurrency from "../util";
import product from '../trilliant.json'
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

function searchingFor(term) {
    return function (x) {
        return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
    }
}
export default class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: product,
            term: "",
        }
        this.searchHandler = this.searchHandler.bind(this);

    }
    searchHandler(event) {
        this.setState({ term: event.target.value })
    }

    render() {
        const { term, product } = this.state;
        return (
            <div >
                <div className="wrap">
                    <div class="search">
                        <Autocomplete
                            className="searchTerm"
                            freeSolo
                            id="free-solo-2-demo"
                            disableClearable
                            options={this.props.products.map((product) => product.name)}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Search input"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.searchHandler}
                                    value={term}
                                    InputProps={{ ...params.InputProps, type: 'search' }}

                                />
                            )}
                        />
                        <div type="submit" class="searchButton">
                            <SearchIcon fontSize="large" />
                        </div>
                    </div>
                </div>
                <div className="products" >
                    {this.props.products.filter(searchingFor(term)).map((product) => (
                        < li key={product._id} >
                            <div className="product">
                                <a href={product.url}>
                                    <img src={product.image} alt={product.name}></img>
                                </a>
                                <div className="product-name">
                                    {product.name}
                                </div>
                                <div className="product-store">{product.store}</div>
                                <div className="product-price">
                                    {formatCurrency(product.price)}
                                </div>
                            </div>
                        </li>
                    ))}
                </div>
            </div>
        );
    }
}






