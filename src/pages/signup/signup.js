import * as Handlebars from "handlebars";
import './signup.sass';


const form = document.querySelector('#form');

const signupForm = `  
      <form class="form" method="GET" action="#" name="Signup">
        <div class="form__input-area form__input-area_bottom-margin-small">
            <h2 class="form__title">Sign up</h2>
            <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="text" name="first_name" value=""
                  required aria-label="First name" />
                  <label class="form__input-floating-label">First name</label>
                  <span class="form__error form__error_visible" id="name-error">Error placeholder</span>
              </div>            
              <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="text" name="second_name" value=""
                  required aria-label="Second name" />
                  <label class="form__input-floating-label">Second name</label>
                  <span class="form__error" id="name-error"></span>
              </div>              
              <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="text" name="login" value=""
                  required aria-label="Login" />
                  <label class="form__input-floating-label">Login</label>
                  <span class="form__error" id="name-error"></span>
              </div>
              <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="email" name="email" value=""
                  required aria-label="Email" />
                  <label class="form__input-floating-label">Email</label>
                  <span class="form__error" id="name-error"></span>
              </div>              
              <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="text" name="phone" value=""
                  required aria-label="Phone" />
                  <label class="form__input-floating-label">Phone</label>
                  <span class="form__error" id="name-error"></span>
              </div>
            <div class="form__input-floating-label-group">
                <input class="form__input" type="password" name="password" value=""
                  required aria-label="Password" />
                <label class="form__input-floating-label">Password</label>
                <span class="form__error" id="link-error"></span>
            </div>            
            <div class="form__input-floating-label-group">
                <input class="form__input" type="password" name="password-repeat" value=""
                  required aria-label="Password (again)" />
                <label class="form__input-floating-label">Password (again)</label>
                <span class="form__error" id="link-error"></span>
            </div>
        </div>
        <button class="button" type="submit" aria-label="Sign in">Sign in</button>
        <div class="form__second-action-button"><a href="/login.html" class="text-link">I already have an account</a></div>
      </form>
`

let template = Handlebars.compile(signupForm)();

form.innerHTML += template

