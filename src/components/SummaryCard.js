function SummaryCard({ cartTotalPrice, state, children }) {
  return (
    <main class="cart__sumary-content p-8">
      <header class="heading-4">Price Details</header>
      <hr />
      <div class="order-data">
        <p class="f-6">Price({state.cart.length} items)</p>
        <p class="f-6">Rs. {cartTotalPrice}</p>
      </div>
      <div class="order-data">
        <p class="f-6">Discount</p>
        <p class="f-6">&ndash; Rs. {cartTotalPrice + 200}</p>
      </div>
      <div class="order-data">
        <p class="f-6">Delivery Charges</p>
        <p class="f-6">Rs. 40</p>
      </div>
      <hr />
      <div class="order-data">
        <p class="heading-3">Total Amount</p>
        <p class="heading-3">Rs . {cartTotalPrice + 40}</p>
      </div>
      <hr />
      <p class="f-6">You Will Save Rs. 200 on this Order</p>
      {children}
    </main>
  );
}

export { SummaryCard };
