import * as Handlebars from "handlebars";
import {userData} from "../../utils/userData";
import {chats} from "../../utils/chats";

import './chat.sass';

const chat = document.querySelector('#chat');

const chatTemplate = `  
  <section class="chats">
      <div class="chats-userinfo-and-search">
          <div class="chats__userinfo">
            <div class="user-in-chat">
              <div class="user-in-chat__avatar-container">
              </div>
              <span class="user-in-chat__data">{{userData.firstName}} {{userData.lastName}}</span>
              </div>
              <a href="profile.html" class="chats__profile-link">Профиль &#8594;</a>
          </div>
      </div>
      
        <div class="chats__search-and-compose">
            <input class="chats__search-input" placeholder="Поиск"></input>
            <div class="compose">
                <button class="chats-compose-icon"></button>    
            </div>
        </div>

      <ul class="chats__list">
        {{#each chats}}
          <li class="chats__list-item">
              <div class="chats__list-item-avatar-name-message">
                <img class="avatar avatar_chat" src={{this.image}} alt={{this.name}} />
                <div class="chats__list-item-name-and-message">
                    <p class="chats__list-item-message-username">{{this.name}}</p>
                    <p class="chats__list-item-last-message">{{this.lastMessage}}</p>
                </div>
              </div>
              <div class="chats__list-item-date-and-counter">
                <p class="chats__list-item-message-time">{{this.time}}</p>
                <div class="chats__list-item-message-counter">{{this.counter}}2</div>
              </div>  
          </li>
        {{/each}}
      </ul>
  </section>
  
  <section class="chat">
    <div class="chat-container">
        <p class="chat-not-selected">Select a chat to start messaging</p>
    </div>
  </section>
`

const template = Handlebars.compile(chatTemplate)({
    userData, chats
})

chat.innerHTML += template