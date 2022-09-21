// language=hbs
export const profileLayout = `
        <div class="profile">
            <a href="/messenger" class="profile__goback"></a>
            <section class="profile-block">
                {{#Avatar classModificator="avatar_profile" src=userData.avatarUrl alt=userData.avatarAlt }}
                {{/Avatar}}
                <div class="profile-block__userdata">
                    <p class="profile-block__userdata-name">{{this.first_name}}</p>
                    <form class="profile-block__form">

                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="email"
                          name="email"
                          value=this.email
                          label="Email"
                          errorText="Error in email"
                          placeholder=this.email
                          disabled="disabled"
                          ref="email"
                        }}
                        {{/Input}}
                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="text"
                          name="login"
                          value=""
                          label="Login"
                          errorText="Error in Login"
                          placeholder=this.login
                          disabled="disabled"
                          ref="login"
                        }}
                        {{/Input}}
                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="text"
                          name="first_name"
                          value=this.first_name
                          label="First name"
                          errorText="Error in First name"
                          placeholder=this.first_name
                          disabled="disabled"
                          ref="first_name"
                        }}
                        {{/Input}}
                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="text"
                          name="second_name"
                          value=this.second_name
                          label="Last name"
                          errorText="Error in Last name"
                          placeholder=this.second_name
                          disabled="disabled"
                          ref="second_name"
                        }}
                        {{/Input}}
                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="text"
                          name="display_name"
                          value=this.display_name
                          label="Display name"
                          errorText="Error in Display name"
                          placeholder=this.display_name
                          disabled="disabled"
                          ref="display_name"
                        }}
                        {{/Input}}
                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="text"
                          name="phone"
                          value=this.phone
                          label="Phone"
                          errorText="Error in Phone"
                          placeholder=this.phone
                          disabled="disabled"
                          ref="phone"
                        }}
                        {{/Input}}
                        
                    </form>
                </div>

                <ul class="profile__actions profile__actions_visible">
                    <li class="profile__actions-link">
                        <a class="text-link" href="/settings-edit" class="text-link">Edit profile</a>
                    </li>
                    <li class="profile__actions-link">
                        <a class="text-link" href="/settings-edit-password" class="text-link">Change password</a>
                    </li>
                    <li class="profile__actions-link">
                        {{#Button
                          class="text-link profile__actions-link-danger"
                          id="button-signout"
                          name="button-signout"
                          onClick=onLogoutClick
                          ref="button-signout"
                        }}
                            Sign out
                        {{/Button}}
                    </li>
                </ul>
            </section>
        </div>
    `