import React, { Component } from "react";
import formatCurrency from "../util";
import product from '../trilliant.json'


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

            <div>



                <ul className='second-nav-container'>
                    <li><a href="">Men</a></li>
                    <li><a href="">Women</a></li>
                    <li><a href="">Shirts</a></li>
                    <li><a href="">Dresses</a></li>
                    <li><a href="">Pants</a></li>
                    <li> <form className="search-container">
                        <input type="text"
                            onChange={this.searchHandler}
                            value={term}
                            placeholder="Search"
                        />
                    </form>
                    </li>

                </ul>






                <ul className="products">


                    {/* <picture>
                        <source srcSet={product.url} />
                        <img src={product.url} alt={product.alt} />
                    </picture> */}


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


                </ul>
            </div>




        );
    }
}




