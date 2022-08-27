import './styles/error-template.sass';

export const errorTemplate = `
  <div class="error-template">
    <div class="error-template__number">{{number}}</div>
    <div class="error-template__text">{{text}}</div>
    <a class="text-link" href={{link}}>Back</a>
  </div>
`