// feature 1
import React from "react";
import data from "../../trilliant.json";
import Products from "../Product";
import Filter from "../Filter"



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

    // filterBodytype = (event) => {
    //     // impl
    //     console.log(event.target.value);
    //     if (event.target.value === "") {
    //         this.setState({ bodytype: event.target.value, products: data.products });
    //     } else {
    //         this.setState({
    //             bodytype: event.target.value,
    //             products: data.products.filter(
    //                 (product) => product.bodytype.indexOf(event.target.value) >= 0
    //             ),
    //         });
    //     }
    // };


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
            <div className="grid-container">

                <main>
                    <div className="content">
                        <div className="main">


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
                    </div>
                </main>
            </div>
        );
    }
}

export default App;