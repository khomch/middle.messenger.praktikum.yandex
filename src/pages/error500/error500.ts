import * as Handlebars from "handlebars";
import './error500.sass';
import {errorTemplate} from "../../components/error-template/error-template";

const error = document.querySelector('#error500');

let errorData = Handlebars.compile(errorTemplate)({
    number: "500",
    text: "Looks like something went wrong! Please come back later",
    link: "/index.html"
});

error!.innerHTML += errorData

