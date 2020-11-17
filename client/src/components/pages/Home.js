// feature 1
import React from "react";
import data from "../../trilliant.json";
import Products from "../products/Product";
import Filter from "../filter/Filter"
import Carouselitem from "../carousel/Carouselitem.js";
import { Carousel } from "react-bootstrap";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: "",
            bodytype: "",
            quality: "",

        };
    }
    sortProducts = (event) => {
        // impl
        const sort = event.target.value;
        console.log(event.target.value);
        this.setState((state) => ({
            sort: sort,
            products: this.state.products
                .slice()
                .sort((a, b) =>
                    sort === "lowest"
                        ? a.price > b.price
                            ? 1
                            : -1
                        : sort === "highest"
                            ? a.price < b.price
                                ? 1
                                : -1
                            : a._id < b._id
                                ? 1
                                : -1
                ),
        }));
    };
    filterProducts = (event) => {
        // impl
        console.log(event.target.value);
        if (event.target.value === "") {
            this.setState({ size: event.target.value, products: data.products });
        } else {
            this.setState({
                size: event.target.value,
                products: data.products.filter(
                    (product) => product.event.target.value
                ),
            });
        }
    };

    filterBodytype = (event) => {
        // impl
        let averageFit = event.target.value;
        if (averageFit == "0") {
            this.setState({ bodytype: event.target.value, products: data.products }, () => {
                console.log('All Products Show', this.state.products)
            });
        } else {
            this.setState({
                bodytype: event.target.value,
                products: data.products.filter((product) => product.averageFit == averageFit),
            }, () => {
                console.log("PRODUCTS", this.state.products);
            });
        }
    };
    filterQuality = (event) => {
        let averageQuality = event.target.value;

        console.log(event.target.value)

        if (averageQuality == '100') {
            this.setState({
                quality: event.target.value,
                products: data.products.filter((product) => product.averageQuality == averageQuality),
            }, () => {
                console.log("Quality", this.state.products);
            })
        } else if (averageQuality == '80') {
            this.setState({
                quality: event.target.value,
                products: data.products.filter((product) => product.averageQuality == averageQuality)
            }, () => {
                console.log("Quality 80", this.state.products)
            })
        } else if (averageQuality == '60') {
            this.setState({
                quality: event.target.value,
                products: data.products.filter((product) => product.averageQuality == averageQuality)
            })
        } else {
            this.setState({
                quality: event.target.value,
                products: data.products
            }, () => console.log("All", this.state.products))
        }
    }

    render() {

        return (

            <div className="main">
                <Carouselitem />
                <div className="search-filter">
                    <Filter
                        count={this.state.products.length}
                        size={this.state.size}
                        sort={this.state.sort}
                        bodytype={this.state.bodytype}
                        filterBodytype={this.filterBodytype}
                        filterQuality={this.filterQuality}
                        filterProducts={this.filterProducts}
                        sortProducts={this.sortProducts}
                    ></Filter>


                    <Products products={this.state.products}></Products>
                </div>
            </div>

        );
    }
}

export default App;