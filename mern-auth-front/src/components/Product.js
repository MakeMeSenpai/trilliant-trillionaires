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
                <form>
                    <input type="text"
                        onChange={this.searchHandler}
                        value={term}
                    />
                </form>

                <ul className="products">

                    <picture>

                        <source srcSet={product.url} />
                        <img src={product.url} alt={product.alt} />
                    </picture>


                    {this.props.products.filter(searchingFor(term)).map((product) => (
                        < li key={product._id} >
                            <div className="product">
                                <a href={product.url}>

                                    <img src={product.image} alt={product.name}></img>
                                </a>
                                <p>{product.name}</p>
                                <p>{product.store}</p>
                                <p>{product.price}</p>
                                <p>{product.url}</p>
                                <p>{product.averageFit}</p>
                                <p>{product.averageOverall}</p>
                                <p>{product.averageQuality}</p>
                                <p>{product.averageShipping}</p>


                                <div className="product-price">
                                    {/* <div>{formatCurrency(product.price)}</div> */}
                                    {/* <button className="button primary">Add To Cart</button> */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        );
    }
}



// </div >
