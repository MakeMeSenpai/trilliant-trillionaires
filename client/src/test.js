// import React, { Component } from "react";
// import Chip from "@material-ui/core/Chip";
// import TextField from "@material-ui/core/TextField";
// import Autocomplete from "@material-ui/lab/Autocomplete";
// import products from './trilliant.json'
// class Test extends Component {
//     state = {
//         moviesM: [],
//     };

//     render() {
//         return (
//             <div className="product">
//                 {this.props.products?.length > 0 && (
//                     <Autocomplete
//                         multiple
//                         id="tags-standard"
//                         options={this.props.products[0]}
//                         //   disableClearable
//                         getOptionLabel={(products) => products.name}
//                         onChange={(event, newVal) => {
//                             if (newVal) {
//                                 this.setState({
//                                     moviesM: [...newVal],
//                                 });
//                             } else {
//                                 this.setState({
//                                     moviesM: [],
//                                 });
//                             }
//                         }}
//                         renderInput={(params) => (
//                             <TextField
//                                 {...params}
//                                 variant="standard"
//                                 label="Select Movies Here"
//                                 placeholder="Movies"
//                             />
//                         )}
//                     />
//                 )}

//                 <div className="product__movies">
//                     {this.state.moviesM?.length > 0
//                         ? this.state.moviesM.map((products) => (
//                             <div className="product__movie" key={products._id}>
//                                 <img
//                                     className="product__moviePoster"
//                                     src={products.image}
//                                     alt={products.name}
//                                 />
//                             </div>
//                         ))
//                         : this.props.products[0]?.map((products) => (
//                             <div className="product__movie" key={products._id}>
//                                 <img
//                                     className="product__moviePoster"
//                                     src={products.image}
//                                     alt={products.name}
//                                 />
//                             </div>
//                         ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default Test;



