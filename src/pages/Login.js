import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';
import { useState } from 'react';

export default function Login() {
  const [isActive, setIsActive] = useState(false);

  return (
    <section class={`forms__container ${isActive ? 'active' : ''}`}>
      <main class="forms">
        <SignIn setIsActive={setIsActive} />
        <SignUp setIsActive={setIsActive} />
      </main>
    </section>
  );
}
