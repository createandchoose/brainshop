import React, { useCallback, useRef } from 'react';
import { useFilter } from 'context/filter-context';

function debounce(cb, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}

function SearchBar() {
  const { state, dispatch } = useFilter();

  const inputRef = useRef('');

  function handleInputChange(e) {
    console.log(e.target);
    dispatch({ type: 'SEARCH', payload: inputRef.current.value });
  }

  console.log('rendered');
  console.log(state.searchValue);

  const runWithDebounce = useCallback(debounce(handleInputChange, 1000), []);

  return (
    <div className="nav-searchBar-container ecom-searchbar">
      <span className="nav-searchIcon">
        <i className="fa fa-search f-5 t-c-3"></i>
      </span>
      <input
        type="text"
        className="p-v-3 nav-searchBar"
        placeholder="Search Items..."
        ref={inputRef}
        onChange={runWithDebounce}
      />
      <span
        className="nav-clearIcon"
        onClick={() => {
          inputRef.current.value = '';
          dispatch({ type: 'CLEAR' });
        }}
      >
        <i className="fas fa-times f-7 t-c-2"></i>
      </span>
    </div>
  );
}

export { SearchBar };
