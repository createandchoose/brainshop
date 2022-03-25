import React from 'react';

function Radio({ state, id, value, title, handleChange }) {
  return (
    <label className="radio m-v-4 f-6" htmlFor={id}>
      <input
        onChange={handleChange}
        type="radio"
        name="item"
        id={id}
        className="radio__input"
        value={value}
        checked={state.sortBy === value}
      />
      <div className="radio__radio border-round p-1"></div>
      {title}
    </label>
  );
}

export { Radio };
