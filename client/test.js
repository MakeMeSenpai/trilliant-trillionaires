import React, { Component } from "react";
import "./Product.css";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class Product extends Component {
    state = {
        moviesM: [],
    };

    render() {
        return (
            <div className="product">
                {this.props.movies?.length > 0 && (
                    <Autocomplete
                        multiple
                        id="tags-standard"
                        options={this.props.movies[0]}
                        //   disableClearable
                        getOptionLabel={(option) => option.title}
                        onChange={(event, newVal) => {
                            if (newVal) {
                                this.setState({
                                    moviesM: [...newVal],
                                });
                            } else {
                                this.setState({
                                    moviesM: [],
                                });
                            }
                        }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                variant="standard"
                                label="Select Movies Here"
                                placeholder="Movies"
                            />
                        )}
                    />
                )}

                <div className="product__movies">
                    {this.state.moviesM?.length > 0
                        ? this.state.moviesM.map((movie) => (
                            <div className="product__movie" key={movie.id}>
                                <img
                                    className="product__moviePoster"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </div>
                        ))
                        : this.props.movies[0]?.map((movie) => (
                            <div className="product__movie" key={movie.id}>
                                <img
                                    className="product__moviePoster"
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                />
                            </div>
                        ))}
                </div>
            </div>
        );
    }
}

export default Product;



