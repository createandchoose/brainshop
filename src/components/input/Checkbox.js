import React from 'react';

function Checkbox({ id, title, handleCheckboxChange, booleanChecked, name }) {
  return (
    <>
      <label htmlFor={id} className="checkbox f-6 p-h-4 checkbox__label">
        <input
          onChange={handleCheckboxChange}
          className="checkbox__input"
          type="checkbox"
          id={id}
          checked={booleanChecked}
          name={name}
        />
        <div className="checkbox__box"></div>
        {title}
      </label>
    </>
  );
}

export { Checkbox };

/*
<Checkbox
                id={item.id}
                handleCheckboxChange={e =>
                  dispatch({
                    type: 'TOGGLE_CHECKED',
                    payload: e.target.checked,
                  })
                }
                title={`${item.userName}\
  House no. ${item.house} ${item.locality} ${item.city} Pin : ${item.pin} Phone : ${item.phone}`}
                booleanChecked={state.checked}
              />


              <label htmlFor={item.id} className="checkbox f-6 p-h-4 m-v-2">
                <input
                  onChange={e => handleCheckBoxChange(e, item)}
                  className="checkbox__input"
                  type="checkbox"
                  id={item.id}
                  defaultChecked={state.checked}
                />
                <div className="checkbox__box"></div>
                {`${item.userName}\
  House no. ${item.house} ${item.locality} ${item.city} Pin : ${item.pin} Phone : ${item.phone}`}
              </label>

*/
