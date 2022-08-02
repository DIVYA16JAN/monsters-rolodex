import { Component } from "react";
import "./search-box.styles.css";

const SearchBox=((props)=>{
  return (
    <input
      onChange={props.onChangeHandler}
      className={`searh-field ${props.className}`}
      type={props.type}
      placeholder={props.placeholder}
    />
  );
});

/* class SearchBox extends Component {
  render() {
    return (
      <input
        onChange={this.props.onChangeHandler}
        className={`searh-field ${this.props.className}`}
        type={this.props.type}
        placeholder={this.props.placeholder}
      />
    );
  }
} */

export default SearchBox;
