import React from 'react';
import { useFilter } from 'context/filter-context';

function SearchBar() {
  const { state, dispatch } = useFilter();
  return (
    <div className="nav-searchBar-container ecom-searchbar">
      <span className="nav-searchIcon">
        <i className="fa fa-search f-5 t-c-3"></i>
      </span>
      <input
        type="text"
        className="p-v-3 nav-searchBar"
        placeholder="Search Items..."
        value={state.searchValue}
        onChange={e => dispatch({ type: 'SEARCH', payload: e.target.value })}
      />
      <span
        className="nav-clearIcon"
        onClick={() => dispatch({ type: 'CLEAR' })}
      >
        <i className="fas fa-times f-7 t-c-2"></i>
      </span>
    </div>
  );
}

export { SearchBar };
