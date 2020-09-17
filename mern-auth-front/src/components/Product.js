import React, { Component } from "react";
import formatCurrency from "../util";
import product from '../data.json'





function searchingFor(term) {
    return function (x) {
        return x.title.toLowerCase().includes(term.toLowerCase()) || !term;
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
            <div>
                <form>
                    <input type="text"
                        onChange={this.searchHandler}
                        value={term}
                    />
                </form>



                <ul className="products">
                    {this.props.products.filter(searchingFor(term)).map((product) => (
                        <li key={product._id}>
                            <div className="product">
                                <a href={"#" + product._id}>
                                    <img src={product.image} alt={product.title}></img>
                                    <p>{product.title}</p>
                                </a>
                                <div className="product-price">
                                    <div>{formatCurrency(product.price)}</div>
                                    <button className="button primary">Add To Cart</button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}



// </div >