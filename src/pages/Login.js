import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';
import { useAuth } from 'context/auth-context';
import { Helmet } from 'react-helmet';

export default function Login() {
  const { loginState } = useAuth();
  return (
    <>
      <Helmet>
        <title>Authentication</title>
      </Helmet>
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
    </>
  );
}
