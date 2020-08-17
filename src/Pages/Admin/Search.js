import React, { useEffect, useReducer, Fragment } from "react";
import { connect, useDispatch } from "react-redux";
import { createAction } from "../../Redux/Action/Action";
import { SEARCH } from "../../Redux/Action/Type";
import { AdminReducer, initialState } from "../../Redux/Reducers/AdminReducer";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  const dispatch = useDispatch();
  const getKeyWord = (keyword) => {
    dispatch(createAction(SEARCH, keyword));
  };

  return (
    <div className="search">
      <input
        type="text"
        className="form-control search-bar"
        onChange={(e) => {
          getKeyWord(e.target.value);
        }}
      />
      <SearchIcon className="search-icon" />
    </div>
  );
}

export default connect()(Search);
