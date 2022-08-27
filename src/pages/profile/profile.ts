import * as Handlebars from "handlebars";
import './profile.sass';
import {userData} from "../../utils/userData";


const profile = document.querySelector('#profile');

const profileLayout = `
  <a href="/index.html" class="profile__goback"></a>  
  <section class="profile-block">
    <div class="avatar">
     <img src={{avatarUrl}} alt={{avatarAlt}} class="avatar__image"/>
    </div>
    <div class="profile-block__userdata">
        <p class="profile-block__userdata-name">{{firstName}}</p>
      <form class="profile-block__form">
       
        <div class="profile-block__form-input-label-group">
            <input type="email" name="email" class="profile-block__form-input" placeholder={{email}}></input>
            <label class="profile-block__form-input-label">Email</label>
        </div>
        
        <div class="profile-block__form-input-label-group">
            <input type="text" name="login" class="profile-block__form-input" placeholder={{login}}></input>
            <label class="profile-block__form-input-label">Login</label>
        </div>

        <div class="profile-block__form-input-label-group">
            <input type="text" name="first-name" class="profile-block__form-input" placeholder={{firstName}}></input>
            <label class="profile-block__form-input-label">First name</label>
        </div>
        
        <div class="profile-block__form-input-label-group">
            <input type="text" name="last-name" class="profile-block__form-input" placeholder={{lastName}}></input>
            <label class="profile-block__form-input-label">Last Name</label>
        </div>
        
        <div class="profile-block__form-input-label-group">
            <input type="text" name="display_name" class="profile-block__form-input" placeholder={{displayName}}></input>
            <label class="profile-block__form-input-label">Display name</label>
        </div>
                
        <div class="profile-block__form-input-label-group">
            <input type="text" name="phone" class="profile-block__form-input" placeholder={{phone}}></input>
            <label class="profile-block__form-input-label">Phone</label>
        </div>
      </form>
    </div>
    
    <ul class="profile_actions">
        <li class="profile_actions-link"> <a class="text-link" href="/profile-edit.html" class="text-link">Изменить данные</a></li>
        <li class="profile_actions-link"> <a class="text-link" href="/profile-edit-password.html" class="text-link">Изменить пароль</a></li>
        <li class="profile_actions-link"> <a class="text-link profile_actions-link-danger" href="/index.html" class="text-link">Выход</a></li> 
    </ul>
  </section>

`

let template = Handlebars.compile(profileLayout)(userData)

profile!.innerHTML += template

