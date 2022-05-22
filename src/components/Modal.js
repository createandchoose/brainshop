import reactDom from 'react-dom';

const Modal = ({ state, dispatch, toggleModal }) => {
  console.log(state);
  return reactDom.createPortal(
    <div className="modal-overlay modal-container z-index-x-l show-modal">
      <div className="modal video-lib__modal-container">
        <div className="modal-header video-lib__modal-header p-2">
          <h3 className="heading-4 p-h-2">Fill Your Address</h3>
          <i
            onClick={() => toggleModal(false)}
            className="fa fa-times f-8 close-icon p-h-2"
          ></i>
        </div>
        <div className="modal-content video-lib__modal-content p-8">
          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            Name:
          </label>
          <input
            type="text"
            value={state.userName}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'userName', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />

          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            House No. :
          </label>
          <input
            type="text"
            value={state.house}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'house', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />

          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            Locality:
          </label>
          <input
            type="text"
            value={state.locality}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'locality', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />

          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            City
          </label>
          <input
            type="text"
            value={state.city}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'city', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />

          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            Pin Code.
          </label>
          <input
            type="text"
            value={state.pin}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'pin', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />

          <label htmlFor="playList-name" className="t-c-3 f-5 p-v-2 f-bold">
            Phone number
          </label>
          <input
            type="text"
            value={state.phone}
            onChange={event =>
              dispatch({
                type: 'USER_INPUT',
                payload: { key: 'phone', value: event.target.value },
              })
            }
            className="note__input modal__input p-v-2"
          />
        </div>

        <div className="modal-button-container p-4">
          <button
            onClick={() => {
              dispatch({ type: 'SAVE_ADDRESS' });
              toggleModal(false);
            }}
            className="input-field__button"
          >
            Save
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('portal')
  );
};

export { Modal };
