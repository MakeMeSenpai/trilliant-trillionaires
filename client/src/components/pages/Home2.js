// feature 1
import React from "react";
import data from "../../trilliant.json";
import Products from "../Product";
import Filter from "../Filter"
import Cardhome from "../Cardhome.js";



class App extends React.Component {
    constructor() {
        super();
        this.state = {
            products: data.products,
            size: "",
            sort: "",
            bodytype: "",

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
       
        console.log(event.target.value);
        if (averageFit == "0") {
            this.setState({ bodytype: event.target.value, products: data.products }, () => {
                console.log('All Products Show', this.state.products)
            });
            // console.log("Producst", this.state.products);
        } else {
            this.setState({
                bodytype: event.target.value,
                products: data.products.filter((product) => product.averageFit == averageFit),
            }, ()=> {
                console.log("PRODUCTS", this.state.products);
            });
        }
    };


    // "averageFit": 60`,
    // "averageOverall": 60,
    // "averageQuality": 60,
    // "averageShipping": -1,





    // filterGender = (event) => {
    //     // impl
    //     console.log(event.target.value);
    //     if (event.target.value === "") {
    //         this.setState({ gender: event.target.value, products: data.products });
    //     } else {
    //         this.setState({
    //             gender: event.target.value,
    //             products: data.products.filter(
    //                 (product) => product.gender.indexOf(event.target.value) >= 0
    //             ),
    //         });
    //     }
    // };

    render() {

        return (

            <div className="main">
                <Cardhome />
                <Filter

                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    bodytype={this.state.bodytype}
                    filterBodytype={this.filterBodytype}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                ></Filter>

                <Products products={this.state.products}></Products>
            </div>

        );
    }
}

export default App;