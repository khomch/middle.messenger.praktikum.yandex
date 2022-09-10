import { inputValidator } from "./validation/inputValidator";
import { getInputsValues } from "./getInputsValues";

export function onSubmit(e: Event, refs: any) {
  e.preventDefault()
  const inputs: any = document.getElementsByTagName('input')
  const inputsArray = Array.from(inputs)
  const formIsValid = {
    isValid: true
  };

  inputsArray.forEach((input: any) => !inputValidator(input.name, input.value) && Object.defineProperty(formIsValid, 'isValid', {value: false})
    && refs[input.name].refs.error.setProps({errorClass: 'form__error form__error_visible'}))

  if (!formIsValid.isValid) {
    console.error("Form doesn't valid")
  }
  else {
    console.log(getInputsValues())
  }
}