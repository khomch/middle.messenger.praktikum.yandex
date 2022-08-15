import * as Handlebars from "handlebars";
import '../profile/profile.sass';
import {userData} from "../../utils/userData";

const profileEditPassword = document.querySelector('#profile-edit-password');

const changeDataLayout = `
  <a href="/index.html" class="profile__goback"></a>  
  <section class="profile-block">
    <div class="avatar avatar_edit">
        <img src={{avatarUrl}} alt={{avatarAlt}} class="avatar__image"/>
    </div>
    
    <div class="profile-block__userdata">
      <form class="profile-block__form">

       
        <div class="profile-block__form-input-label-group">
            <input type="password" name="oldPassword" class="profile-block__form-input" placeholder=""></input>
            <label class="profile-block__form-input-label">Old Password</label>
        </div>
        
        <div class="profile-block__form-input-label-group">
            <input type="password" name="newPassword" class="profile-block__form-input" placeholder=""></input>
            <label class="profile-block__form-input-label">New Password</label>
        </div>
                
        <div class="profile-block__form-input-label-group">
            <input type="password" name="newPasswordRepeat" class="profile-block__form-input" placeholder=""></input>
            <label class="profile-block__form-input-label">Repeat Password</label>
        </div>

        <button class="button" type="submit" aria-label="Save">Save</button>
      </form>
    </div>
    
  </section>
`

let template = Handlebars.compile(changeDataLayout)(userData)

profileEditPassword.innerHTML += template

