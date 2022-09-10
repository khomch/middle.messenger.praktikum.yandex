// language=hbs
export const profileEditLayout = `
    <div class="profile">
        <a href="/profile" class="profile__goback"></a>
        <section class="profile-block">
            {{#Avatar classModificator="avatar_edit" src=userData.avatarUrl alt=userData.avatarAlt }}
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
                            value=userData.email
                            label="Email"
                            errorText="Error in email"
                            ref="email"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="login"
                            label="Login"
                            errorText="Error in Login"
                            value=userData.login
                            ref="login"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="first_name"
                            label="First name"
                            errorText="Error in First name"
                            value=userData.firstName
                            ref="first_name"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="second_name"
                            label="Last name"
                            errorText="Error in Last name"
                            value=userData.lastName
                            ref="second_name"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="display_name"
                            value=userData.displayName
                            label="Display name"
                            errorText="Error in Display name"
                            ref="display_name"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="phone"
                            label="Phone"
                            errorText="Error in Phone"
                            value=userData.phone
                            ref="phone"
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