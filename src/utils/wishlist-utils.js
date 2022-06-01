import axios from 'axios';

const addToWishlist = async (product, dispatch, token) => {
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      {
        product,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    dispatch({ type: 'ADD_TO_WISHLIST', payload: response.data.wishlist });
    console.log(response.data.wishlist);
  } catch (e) {
    console.log(e);
  }
};

const removeFromWishlist = async (productId, dispatch) => {
  try {
    const response = await axios.delete(`/api/user/wishlist/${productId}`, {
      headers: {
        authorization: token,
      },
    });
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
