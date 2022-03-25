import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';
import { useAuth } from 'context/auth-context';
export default function Login() {
  const { loginState } = useAuth();
  return (
    <div id="login-signup-page">
      <section
        class={`forms__container ${loginState.isActive ? 'active' : ''}`}
      >
        <main class="forms">
          <SignIn />
          <SignUp />
        </main>
      </section>
    </div>
  );
}
