function RangeSlider({ state, dispatch }) {
  return (
    <div className="p-h-6 component-border">
      <input
        onChange={e => dispatch({ type: 'RANGE', payload: e.target.value })}
        type="range"
        min={0}
        max={1000}
        aria-label="input-range-slider"
        step="50"
        value={state.rangeValue}
        className="custom-range m-v-6"
        id="volume"
        name="volume"
      />
      <p className="f-5 f-bold center-text">
        Showing Products below : Rs{' '}
        <span className="t-c-3">{state.rangeValue}</span>
      </p>
    </div>
  );
}

export { RangeSlider };
