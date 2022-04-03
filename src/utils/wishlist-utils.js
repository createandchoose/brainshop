import axios from 'axios';

const config = {
  headers: {
    authorization: localStorage.getItem('token'),
  },
};

const addToWishlist = async (product, dispatch) => {
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      {
        product,
      },
      config
    );
    dispatch({ type: 'ADD_TO_WISHLIST', payload: response.data.wishlist });
    console.log(response.data.wishlist);
  } catch (e) {
    console.log(e);
  }
};

const removeFromWishlist = async (productId, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/wishlist/${productId}`,
      config
    );
    dispatch({
      type: 'REMOVE_FROM_WISHLIST',
      payload: response.data.wishlist,
    });
    console.log(response.data.wishlist, 'delete call');
  } catch (e) {
    console.log(e);
  }
};

export { addToWishlist, removeFromWishlist };
