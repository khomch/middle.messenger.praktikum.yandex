import * as Handlebars from "handlebars";
import './index.sass';

const links = document.querySelector('#links');

const linksTemplate = `  
  <h1 class="h1">AX Messenger</h1>
  <ul class="links__list">
  {{title}}
    {{#each links}}
      <li>
         <a class="links__list-item" href={{this.link}}>{{this.title}}</a>
      </li>
    {{/each}}
  </ul>
`

let template = Handlebars.compile(linksTemplate)({
    links: [
        {
            title: "Login",
            link: "/login.html"
        },
        {
            title: "Sign-up",
            link: "/signup.html"
        },
        {
            title: "Error 500",
            link: "/500.html"
        },
        {
            title: "Error 404",
            link: "/404.html"
        },
        {
            title: "Profile",
            link: "/profile.html"
        },
        {
            title: "Chat",
            link: "/chat.html"
        },
    ],
    title: "Hey! There are some pages:"
});

links.innerHTML += template

