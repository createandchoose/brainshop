import { v4 as uuid } from 'uuid';

import { useReducer, useState } from 'react';
import { Modal, SummaryCard } from 'components';
import { useCart } from 'context/cart-context';
import { loadScript } from 'services/loadScript';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const initialState = {
  address: [
    {
      _id: uuid(),
      userName: 'John Doe',
      house: '30',
      locality: 'Indirapuram',
      city: 'Ghaziabad',
      pin: '23451',
      phone: '123456',
    },
  ],
  userName: '',
  house: '',
  locality: '',
  city: '',
  pin: '',
  phone: '',
  checked: null,
};

const addressReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'USER_INPUT':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    case 'SAVE_ADDRESS':
      return {
        ...state,
        address: [
          ...state.address,
          {
            _id: uuid(),
            userName: state.userName,
            house: state.house,
            locality: state.locality,
            city: state.city,
            pin: state.pin,
            phone: state.phone,
          },
        ],
        userName: '',
        house: '',
        locality: '',
        city: '',
        pin: '',
        phone: '',
        checked: false,
      };

    case 'TOGGLE_CHECKED':
      return {
        ...state,
        checked: action.payload,
      };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

function CheckoutPage() {
  const [state, dispatch] = useReducer(addressReducer, initialState);
  const [showAddress, setShowAddress] = useState({});
  const { state: cartState, dispatch: cartDispatch } = useCart();
  const navigate = useNavigate();
  const cartTotalPrice = cartState.cart.reduce(
    (total, item) => parseInt(total + item.price * item.count),
    0
  );

  const [showModal, setShowModal] = useState(false);

  const toggleModal = value => {
    setShowModal(value);
  };

  const handleRadioChange = (e, item) => {
    dispatch({
      type: 'TOGGLE_CHECKED',
      payload: e.target.name,
    });

    if (e.target.checked) {
      setShowAddress(item);
    }
  };

  const placeOrderHandler = () => {
    displayRazorpay();
  };

  const displayRazorpay = async () => {
    const res = await loadScript(
      'https://checkout.razorpay.com/v1/checkout.js'
    );

    if (!res) {
      alert('Razorpay SDK failed to load. Are you online?');
      return;
    }

    const options = {
      key: 'rzp_test_YgR8OOWbPOYe2S',
      amount: cartTotalPrice * 100,
      currency: 'INR',
      name: 'Brainshop store',
      description: 'Order for products',
      handler: function (response) {
        console.log(response);
        cartDispatch({ type: 'CART_CLEAR' });
        alert(
          `Payment SuccessFull with paymentId : ${response.razorpay_payment_id}`
        );
        navigate('/');
      },
      prefill: {
        email: 'gaurav.kumar@example.com',
        contact: '9999999999',
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <Helmet>
        <title>Checkout</title>
      </Helmet>
      <div class="checkout__grid-container">
        <div className="address">
          <p className="heading-3 p-h-4">Choose Your Adress Here</p>
          {state.address.map(item => (
            <div className="address-text p-2 m-h-2 m-v-2">
              <AddressCard
                item={item}
                state={state}
                handleRadioChange={handleRadioChange}
              />
            </div>
          ))}
          <button
            onClick={() => toggleModal(true)}
            class="btn btn-danger t-c-1 address-btn m-v-4 m-h-4"
          >
            + Add new Adress
          </button>
        </div>
        <div className="order-summary">
          <p className="heading-3 p-2 t-c-3">Chekout</p>
          <p className="heading-4 p-2 t-c-3 border-bottom">
            Order Details : {cartState.cart.length} items{' '}
          </p>
          <div className="border-bottom">
            {cartState.cart.map(item => (
              <div className="cart-item-show">
                <div className="cart-item-details">
                  <p className="f-7">{item.name}</p>
                  <p className="f-7">{`(${item.count} X ₹${item.price})`}</p>
                </div>
                <p className="f-7 p-h-6">Rs. {item.price * item.count}</p>
              </div>
            ))}
          </div>

          <SummaryCard cartTotalPrice={cartTotalPrice} state={cartState} />
          <p className="heading-4  t-c-3">Address is : </p>
          {state.checked && (
            <p className="f-7">
              {`${showAddress.userName}  
House no. ${showAddress.house} ${showAddress.locality} ${showAddress.city} Pin : ${showAddress.pin} Phone : ${showAddress.phone}`}
            </p>
          )}
          <button
            onClick={placeOrderHandler}
            class="btn btn-danger pay-btn t-c-1 address-btn "
          >
            Proceed to pay
          </button>
        </div>
      </div>
      {showModal && (
        <Modal state={state} dispatch={dispatch} toggleModal={toggleModal} />
      )}
    </>
  );
}

const AddressCard = ({ item, state, handleRadioChange }) => (
  <label className="radio m-v-4 f-6 p-h-4" htmlFor={item.id}>
    <input
      onChange={e => handleRadioChange(e, item)}
      type="radio"
      id={item.id}
      className="radio__input"
      checked={state.checked === item.userName}
      name={item.userName}
    />
    <div className="radio__radio border-round p-1"></div>
    {`${item.userName}\
House no. ${item.house} ${item.locality} ${item.city} Pin : ${item.pin} Phone : ${item.phone}`}
  </label>
);

export default CheckoutPage;
