import React from 'react';

function Checkbox({ state, dispatch }) {
  return (
    <>
      <label htmlFor="myCheckboxId" className="checkbox f-6 p-h-4">
        <input
          onChange={e =>
            dispatch({ type: 'OUT_OF_STOCK', payload: e.target.checked })
          }
          className="checkbox__input"
          type="checkbox"
          name="stock"
          id="myCheckboxId"
          checked={state.outOfStock}
        />
        <div className="checkbox__box"></div>
        Include Out of Stock
      </label>

      <label htmlFor="myCheckboxId2" className="checkbox f-6 p-h-4">
        <input
          onChange={e =>
            dispatch({ type: 'FAST_DELIVERY', payload: e.target.checked })
          }
          className="checkbox__input"
          type="checkbox"
          name="delivery"
          id="myCheckboxId2"
          checked={state.fastDelivery}
        />
        <div className="checkbox__box"></div>
        Fast Delivery Only
      </label>

      <label htmlFor="myCheckboxId2" className="checkbox f-6 p-h-4">
        <input
          onChange={e =>
            dispatch({ type: 'FAST_DELIVERY', payload: e.target.checked })
          }
          className="checkbox__input"
          type="checkbox"
          name="delivery"
          id="myCheckboxId2"
          checked={state.fastDelivery}
        />
        <div className="checkbox__box"></div>
        Books
      </label>
    </>
  );
}

export { Checkbox };
