// language=hbs
export const profileEditLayout = `
    <div class="profile">
        <a href="/settings" class="profile__goback"></a>
        <section class="profile-block">
            {{#Avatar classModificator="avatar_edit" id="avatar-edit" onClick=onAvatarButtonClick src=this.avatar
                      alt=this.avatar }}
            {{/Avatar}}
            <form class="avatar-form" id="avatar-form">
                {{#Input
                        inputContainerClass="profile-block__form-input-label-group profile-block__form-input-label-group_no-display"
                        labelClass="profile-block__form-input-label"
                        inputClass="profile-block__form-input"
                        id="avatar"
                        type="file"
                        name="avatar"
                        accept="image/*"
                        style="display:none"
                }}
                {{/Input}}

                {{#Button
                        class="button button_hide"
                        type="submit"
                        onClick=onAvatarSubmit
                        id="submit-avatar"
                        ref="avatar"
                }}
                    Change Avatar
                {{/Button}}
            </form>
            <div class="profile-block__userdata">
                <p class="profile-block__userdata-name">{{this.first_name}}</p>
                <form class="profile-block__form">

                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="email"
                            name="email"
                            label="Email"
                            value=this.email
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
                            value=this.login
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
                            value=this.first_name
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
                            value=this.second_name
                            ref="second_name"
                    }}
                    {{/Input}}
                    {{#Input
                            inputContainerClass="profile-block__form-input-label-group"
                            labelClass="profile-block__form-input-label"
                            inputClass="profile-block__form-input"
                            type="text"
                            name="display_name"
                            label="Display name"
                            errorText="Error in Display name"
                            value=this.display_name
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
                            value=this.phone
                            ref="phone"
                    }}
                    {{/Input}}

                    {{#Button
                            class="button"
                            type="submit"
                            onClick=onSubmit}}
                        Save
                    {{/Button}}
                </form>
            </div>
        </section>
    </div>
`