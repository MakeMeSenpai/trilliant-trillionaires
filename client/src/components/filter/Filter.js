import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "./filter.css";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const styles = (theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 10,
    padding: 10,
  },
  formControl: {
    margin: theme.spacing.unit * 6,
    minWidth: 140,
  },
});
//This component renders the select drop down method for filtering
class ControlledOpenSelect extends React.Component {
  state = {
    age: "",
    open: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="filter">
        <form autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">Price</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.sort}
              onChange={this.props.sortProducts}
              label="Age"
              inputProps={{
                name: "Price",
                id: "demo-controlled-open-select",
              }}
            >
              <MenuItem value="latest">Latest</MenuItem>
              <MenuItem value="lowest">Lowest</MenuItem>
              <MenuItem value="highest">Highest</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Quality
            </InputLabel>

            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.quality}
              onChange={this.props.filterQuality}
              label="Sizes"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="100">High</MenuItem>
              <MenuItem value="80">Medium</MenuItem>
              <MenuItem value="60">Low</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Average Fit
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.bodytype}
              onChange={this.props.filterBodytype}
              label="Sizes"
            >
              <MenuItem value="0">ALL</MenuItem>
              <MenuItem value="60">Athletic</MenuItem>
              <MenuItem value="80">Big and Tall </MenuItem>
              <MenuItem value="40">Skinny</MenuItem>
              <MenuItem value="100">Large</MenuItem>
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="demo-controlled-open-select">
              Rating
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value={this.props.bodytype}
              onChange={this.props.filterBodytype}
              label="Sizes"
            >
              <MenuItem value="100">
                {" "}
                <Rating name="read-only" defaultValue={4} readOnly /> & Up
              </MenuItem>
              <MenuItem value="80">
                {" "}
                <Rating name="read-only" defaultValue={3} readOnly />& Up{" "}
              </MenuItem>
              <MenuItem value="60">
                {" "}
                <Rating name="read-only" defaultValue={2} readOnly />& Up
              </MenuItem>
              <MenuItem value="40">
                {" "}
                <Rating name="read-only" defaultValue={1} readOnly />& Up
              </MenuItem>
            </Select>
          </FormControl>
        </form>
      </div>
    );
  }
}

ControlledOpenSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ControlledOpenSelect);
