export function getInputsValues() {
  const inputs = document.getElementsByTagName('input');
  const inputsArray = Array.from(inputs)
  let values: any = {};
  for (let i = 0; i < inputsArray.length; i++) {
    values[inputsArray[i].name] = inputsArray[i].value
  }
  return values
}