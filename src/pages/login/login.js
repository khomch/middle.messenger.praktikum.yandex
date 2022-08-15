import * as Handlebars from "handlebars";
import './login.sass';


const form = document.querySelector('#form');

const loginForm = `  
      <form class="form" method="GET" action="#" name="Login">
        <div class="form__input-area form__input-area_bottom-margin-large">
            <h2 class="form__title">Sign in to Messenger</h2>
            <div class="form__input-floating-label-group">
                <input maxlength="30" minlength="0" class="form__input" type="text" name="login" value=""
                  required aria-label="Login" />
                  <label class="form__input-floating-label">Login</label>
                  <span class="form__error form__error_visible" id="name-error">Error placeholder</span>
              </div>
            <div class="form__input-floating-label-group">
                <input class="form__input" type="password" name="password" value=""
                  required aria-label="Password" />
                <label class="form__input-floating-label">Password</label>
                <span class="form__error" id="link-error"></span>
            </div>
        </div>
        <button class="button" type="submit" aria-label="Sign in">Sign in</button>
        <div class="form__second-action-button"><a href="/signup.html" class="text-link">Create an account</a></div>
      </form>
`

let template = Handlebars.compile(loginForm)();

form.innerHTML += template

