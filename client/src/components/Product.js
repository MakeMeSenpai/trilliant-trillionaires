import React, { Component } from "react";
import formatCurrency from "../util";
import product from '../trilliant.json'
import Grid from '@material-ui/core/Grid';
import { DataGrid } from '@material-ui/data-grid';
import SearchIcon from "@material-ui/icons/Search";


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
            spacing: '16',



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


                        <input type="text"
                            onChange={this.searchHandler}
                            value={term}
                            className="searchTerm"
                            placeholder="What are you looking for?"
                        />
                        <div type="submit" class="searchButton">
                            <SearchIcon />
                        </div>
                    </div>
                </div>


                <div className="products" >
                    {this.props.products.filter(searchingFor(term)).map((product) => (
                        < li key={product._id} >
                            <div className="product">
                                <a href={product.url}>
                                    <img src={product.image} ></img>
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










