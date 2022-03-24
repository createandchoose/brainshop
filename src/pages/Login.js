import { SignIn } from 'components/SignIn';
import { SignUp } from 'components/SignUp';
import React from 'react';

export default function Login() {
  return (
    <section class="forms__container">
      <main class="forms">
        <SignIn />

        <SignUp />
      </main>
    </section>
  );
}
