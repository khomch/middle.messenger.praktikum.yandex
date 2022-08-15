import * as Handlebars from "handlebars";
import './error404.sass';
import {errorTemplate} from "../../components/error-template/error-template";

const error = document.querySelector('#error404');

let errorData = Handlebars.compile(errorTemplate)({
    number: "404",
    text: "This is not the web page you are looking for",
    link: "/index.html"
});

error.innerHTML += errorData

