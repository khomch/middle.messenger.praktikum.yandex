// language=hbs
export const profileEditPasswordLayout = `
  <div class="profile">
      <a href="/settings" class="profile__goback"></a>  
    <section class="profile-block">
        {{#Avatar classModificator="avatar_profile" src=userData.avatarUrl alt=userData.avatarAlt }}
        {{/Avatar}}
      <div class="profile-block__userdata">
        <form class="profile-block__form">
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="old_password"
                    value=""
                    label="Old password"
                    errorText="Error in Old Password"
                    placeholder=""
                    ref="old_password"
            }}
            {{/Input}}
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="new_password"
                    value=""
                    label="New Password"
                    errorText="Error in New Password"
                    placeholder=""
                    ref="new_password"
            }}
            {{/Input}}
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="new_password_repeat"
                    value=""
                    label="Repeat Password"
                    errorText="Error in Repeat Password"
                    placeholder=""
                    ref="new_password_repeat"
            }}
            {{/Input}}
  
          {{#Button class="button" type="submit" onClick=onSubmit}}
              Save
          {{/Button}}
        </form>
      </div>
      
    </section>
   </div>
`