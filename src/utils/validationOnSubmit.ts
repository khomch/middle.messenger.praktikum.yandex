import { inputValidator } from "./validation/inputValidator";

export function validationOnSubmit(e: Event, refs: any) {
  e.preventDefault()
  const inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName('input')
  const inputsArray = Array.from(inputs)
  const inputsArrayWithoutFile = inputsArray.filter((input: HTMLInputElement) => input.type !== 'file')

  const passwordsToCompareArray: { value: string }[] = inputsArray.filter((input: HTMLInputElement) => input.id.includes('password-check'))
  const firstPassword: string = passwordsToCompareArray[0] && passwordsToCompareArray[0].value;
  const secondPassword: string = passwordsToCompareArray[1] && passwordsToCompareArray[1].value
  const isPasswordsEqual: boolean = firstPassword === secondPassword

  if (passwordsToCompareArray.length > 0 && !isPasswordsEqual) {
    console.error("Passwords are not equal")
    return {isValid: false, error: "Passwords are not equal"}
  }

  const formIsValid = {
    isValid: true
  };

  if (Array.isArray(refs)) {
    inputsArrayWithoutFile.forEach((input: any) => !inputValidator(input.name, input.value) && Object.defineProperty(formIsValid, 'isValid', {value: false})
      && refs[input.name].refs.error.setProps({errorClass: 'form__error form__error_visible'}))
  }
  else {
    !inputValidator(refs.name, refs.value) && Object.defineProperty(formIsValid, 'isValid', {value: false})
  }

  if (!formIsValid.isValid) {
    console.error("Form doesn't valid")
    return {isValid: false, error: "Form doesn't valid"}
  }
  else {
    return {isValid: true}
  }
}