import { inputValidator } from "./validation/inputValidator";

export function validationOnSubmit(e: Event, refs: any) {
  e.preventDefault()
  const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName('input')
  const inputsArray = Array.from(inputs)
  const inputsArrayWithoutFile = inputsArray.filter((input: HTMLInputElement) => input.type !== 'file')

  const passwordsToCompadeArray: {value: string}[] = inputsArray.filter((input: HTMLInputElement) => input.id.includes('password-check'))
  const isPasswordsEqual: boolean = passwordsToCompadeArray[0].value === passwordsToCompadeArray[1].value

  if (!isPasswordsEqual) {
    console.error("Passwords are not equal")
    return {isValid: false, error: "Passwords are not equal"}
  }

  console.log(isPasswordsEqual)

  const formIsValid = {
    isValid: true
  };

  inputsArrayWithoutFile.forEach((input: any) => !inputValidator(input.name, input.value) && Object.defineProperty(formIsValid, 'isValid', {value: false})
    && refs[input.name].refs.error.setProps({errorClass: 'form__error form__error_visible'}))

  if (!formIsValid.isValid) {
    console.error("Form doesn't valid")
    return {isValid: false, error: "Form doesn't valid"}
  }
  else {

    return {isValid: true}
  }
}