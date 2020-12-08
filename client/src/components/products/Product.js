import React, { Component } from "react";
import formatCurrency from "../../util";
import product from "../../trilliant.json";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./product.css";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Rating from "@material-ui/lab/Rating";

function searchingFor(term) {
  //Returns lowercase string for search bar
  return function (x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: product,
      term: "",
    };
    this.searchHandler = this.searchHandler.bind(this);
  }
  searchHandler(event) {
    //Sets the state with search input
    this.setState({ term: event.target.value });
  }

  render() {
    const { term, product } = this.state;
    return (
      //Renders list of products and search bar
      <div className="product-display">
        <Autocomplete
          className="searchTerm"
          freeSolo
          disableClearable
          options={this.props.products.map((product) => product.name)}
          renderInput={(params) => (
            <TextField
              {...params}
              margin="normal"
              onSelect={this.searchHandler}
              value={term}
              InputProps={{
                ...params.InputProps,
                type: "search",
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                ),
              }}
              placeholder="Search clothes..."
            />
          )}
        />
        <div className="products">
          {this.props.products.filter(searchingFor(term)).map((product) => (
            <div className="product" key={product._id}>
              <a href={product.url}>
                <img src={product.image} alt={product.name}></img>
              </a>
              <div className="product-name">{product.name}</div>
              <div className="product-store">{product.store}</div>
              <div className="product-price">
                {formatCurrency(product.price)}
              </div>
              <Rating name="read-only" defaultValue={4} readOnly />
              <div className="product-fitter">
                <div className="product-fit">
                  Average Fit {product.averageFit}
                </div>
                <div className="product-overall">
                  Average Overall {product.averageOverall}
                </div>
                <div className="product-quality">
                  Average Quality {product.averageQuality}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
