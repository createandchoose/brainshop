function useAddToCart(item, dispatch, setLoader) {
  setLoader(true);
  setTimeout(() => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: item,
    });
    setLoader(false);
  }, 1200);
}

export { useAddToCart };
