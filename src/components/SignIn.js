import React from 'react';

function SignIn({ setIsActive }) {
  return (
    <div class="form login">
      <span class="form__title heading-3">Login</span>
      <form action="#">
        <div class="input-field">
          <input
            type="text"
            placeholder="Enter your email"
            class="form__email-input"
            required
          />
          <i class="uil uil-envelope form-icon left-icon"></i>
        </div>
        <div class="input-field">
          <input
            type="password"
            placeholder="Enter your password"
            class="form__email-input password"
            required
          />
          <i class="uil uil-lock form-icon left-icon"></i>
          <i class="uil uil-eye-slash form-icon showHidePw"></i>
        </div>

        <div class="checkbox-container">
          <div class="checkbox-content">
            <label for="myCheckboxId" class="checkbox f-5">
              <input
                checked
                class="checkbox__input"
                type="checkbox"
                name="myCheckboxName"
                id="myCheckboxId"
              />
              <div class="checkbox__box"></div>
              Remember me
            </label>
          </div>
          <a href="#" class="t-c-3 f-6 f-bold forget-password">
            Forget Password?
          </a>
        </div>

        <div class="input-field button-container">
          <button class="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Login Now
          </button>
        </div>
      </form>

      <div class="login-signup center-text">
        <span class="f-6">
          Not a member?
          <span onClick={() => setIsActive(true)} class="f-6 signup-link">
            Signup now
          </span>
        </span>
      </div>
    </div>
  );
}

export { SignIn };
