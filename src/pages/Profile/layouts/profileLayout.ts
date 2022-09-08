// language=hbs
export const profileLayout = `
        <div class="profile">
            <a href="/chat" class="profile__goback"></a>
            <section class="profile-block">
                {{#Avatar classModificator="avatar_profile" src=userData.avatarUrl alt=userData.avatarAlt }}
                {{/Avatar}}
                <div class="profile-block__userdata">
                    <p class="profile-block__userdata-name">{{userData.firstName}}</p>
                    <form class="profile-block__form">

                        {{#Input
                          inputContainerClass="profile-block__form-input-label-group"
                          labelClass="profile-block__form-input-label"
                          inputClass="profile-block__form-input"
                          type="email"
                          name="email"
                          value=""
                          label="Email"
                          errorText="Error in email"
                          placeholder=userData.email
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
                          placeholder=userData.login
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
                          value=""
                          label="First name"
                          errorText="Error in First name"
                          placeholder=userData.firstName
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
                          value=""
                          label="Last name"
                          errorText="Error in Last name"
                          placeholder=userData.lastName
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
                          value=""
                          label="Display name"
                          errorText="Error in Display name"
                          placeholder=userData.displayName
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
                          value=""
                          label="Phone"
                          errorText="Error in Phone"
                          placeholder=userData.phone
                          disabled="disabled"
                          ref="phone"
                        }}
                        {{/Input}}
                        
                    </form>
                </div>

                <ul class="profile__actions profile__actions_visible">
                    <li class="profile__actions-link">
                        <a class="text-link" href="/profile-edit" class="text-link">Edit profile</a>
                    </li>
                    <li class="profile__actions-link">
                        <a class="text-link" href="/profile-edit-password" class="text-link">Change password</a>
                    </li>
                    <li class="profile__actions-link">
                        <a class="text-link profile__actions-link-danger" href="/" class="text-link">Sign out</a>
                    </li>
                </ul>
            </section>
        </div>
    `