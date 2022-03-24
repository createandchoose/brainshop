import React from 'react';

function SignUp() {
  return (
    <div class="form sign-up">
      <span class="form__title heading-3">Sign up</span>
      <form action="#">
        <div class="input-field">
          <input
            type="text"
            placeholder="Enter your name"
            class="form__email-input"
            required
          />
          <i class="uil uil-user form-icon left-icon"></i>
        </div>

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
        </div>

        <div class="input-field">
          <input
            type="password"
            placeholder="Confirm password"
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
              <div class="checkbox__box"></div>I agree to terms and service
            </label>
          </div>
          <a href="#" class="t-c-3 f-6 f-bold forget-password">
            Need help?
          </a>
        </div>

        <div class="input-field button-container">
          <button class="btn btn-danger t-c-1 final-cta w-100 round-corner">
            Sign-Up Now
          </button>
        </div>
      </form>

      <div class="login-signup center-text">
        <span class="f-6">
          Already a member?
          <a href="#" class="f-6 login-link">
            Sign-in now
          </a>
        </span>
      </div>
    </div>
  );
}

export { SignUp };
