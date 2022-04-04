import { useFilter } from 'context/filter-context';
import { Radio } from 'components/input/Radio';
import { RangeSlider } from './input/RangeSlider';
import { filterTitles, checkObj } from 'utils/filter-utils';
import { Checkbox } from 'components/input/Checkbox';

export default function Sidebar() {
  const { state, dispatch } = useFilter();
  const inputDispatchHandler = e =>
    dispatch({ type: 'SORT_BY', payload: e.target.value });

  return (
    <aside
      className={`list__aside ${
        state.isMenuOpen ? 'aside-open' : ''
      } box-shadow-dark`}
    >
      <header className="list__aside-header p-4">
        <p className="f-8 f-bold">Filters</p>
        <p
          onClick={() => dispatch({ type: 'CLEAR' })}
          className="f-6 t-c-3 f-bold clear-all"
        >
          Clear
        </p>
      </header>
      <main className="aside__content">
        <p className="f-8 f-bold p-h-4">Sort By : </p>
        <div className="list__sort-container component-border">
          {filterTitles.map((item, i) => (
            <Radio
              state={state}
              handleChange={inputDispatchHandler}
              id={`item-${i + 1}`}
              value={item.value}
              title={item.filterTitleName}
            />
          ))}
        </div>
        <p className="f-8 f-bold p-h-4">Price Range : </p>
        <div className="centered-row space-around-row">
          <p className="f-6">100</p>
          <p className="f-6">500</p>
          <p className="f-6">1000</p>
        </div>
        <RangeSlider state={state} dispatch={dispatch} />

        <p className="f-8 f-bold p-4">Category</p>
        <div className="position-checkbox component-border p-4">
          {checkObj(dispatch).map((item, i) => {
            return (
              <Checkbox
                id={`checkbox-${i + 1}`}
                title={item.checkboxTitle}
                handleCheckboxChange={item.dispatchFunction}
                booleanChecked={
                  item.type
                    ? state[item.name]
                    : state.categories.includes(item.name)
                }
                name={item.name}
              />
            );
          })}
        </div>
        <p className="f-8 f-bold p-4">Rating</p>
        <div className="list__rating-container">
          {[4, 3, 2, 1].map((item, i) => (
            <Radio
              state={state}
              handleChange={inputDispatchHandler}
              id={`item-${item + 5}`}
              value={item.toString()}
              title={`${item} star & above`}
            />
          ))}
        </div>
      </main>
    </aside>
  );
}

export { Sidebar };
