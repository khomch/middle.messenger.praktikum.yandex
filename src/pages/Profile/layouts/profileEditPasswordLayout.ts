// language=hbs
export const profileEditPasswordLayout = `
  <div class="profile">
      <a href="/settings" class="profile__goback"></a>  
    <section class="profile-block">
        {{#Avatar classModificator="avatar_profile" src=this.avatar alt=this.avatar }}
        {{/Avatar}}
      <div class="profile-block__userdata">
        <form class="profile-block__form">
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="oldPassword"
                    id="password-old"
                    value=""
                    label="Old password"
                    errorText="Error in Old Password"
                    placeholder=""
                    ref="oldPassword"
                    required="required"
            }}
            {{/Input}}
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="newPassword"
                    id="password-check"
                    value=""
                    label="New Password"
                    errorText="Error in New Password"
                    placeholder=""
                    ref="newPassword"
                    required="required"
            }}
            {{/Input}}
            {{#Input
                    inputContainerClass="profile-block__form-input-label-group"
                    labelClass="profile-block__form-input-label"
                    inputClass="profile-block__form-input"
                    type="password"
                    name="newPasswordRepeat"
                    value=""
                    id="password-check-repeat"
                    label="Repeat Password"
                    errorText="Error in Repeat Password"
                    placeholder=""
                    ref="newPasswordRepeat"
                    required="required"
            }}
            {{/Input}}


  
          {{#Button class="button" type="submit" onClick=onPasswordChangeSubmit
                    ref="onPasswordChangeSubmit"
          }}
              Save
          {{/Button}}
            
        </form>
      </div>
      
    </section>
   </div>
`