import { useCart } from 'context/cart-context';
import { SummaryCard } from './SummaryCard';
import { useNavigate } from 'react-router-dom';

function CartSummary() {
  const navigate = useNavigate();

  const { state } = useCart();

  const cartTotalPrice = state.cart.reduce(
    (total, item) => parseInt(total + item.price * item.count),
    0
  );

  return (
    <section class="cart__order-summary m-v-8">
      <SummaryCard cartTotalPrice={cartTotalPrice} state={state}>
        <button
          onClick={() => navigate('/checkout')}
          class="btn btn-danger t-c-1 final-cta w-100"
        >
          Proceed to checkout
        </button>
      </SummaryCard>
    </section>
  );
}

export { CartSummary };
