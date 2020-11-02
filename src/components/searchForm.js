import React from "react";
import "../styles/form.css";

function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for a name"
          id="search"
        />
        <button id="searchBtn" onClick={props.handleFormSubmit} className="btn btn-primary mt-5">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;