import React from "react";

function Filter(props) {
    return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="filter">Filter:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="filter"
          list="states"
          type="text"
          className="form-control"
          placeholder="Filter by State"
          id="state"
        />
        <datalist id="states">
          { [...new Set(props.results.map(item=>item.location.state))]
          .map(item=>(<option value={item} key={item} />))
          }
            
        </datalist>
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Search
        </button>
      </div>
    </form>
    
        )
}

export default Filter;