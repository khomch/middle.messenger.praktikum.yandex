import { regExs } from "./regExps";

export const inputValidator = (name: string, value: string) => {
  const regExpsArr = Object.entries(regExs)
  const regExpArr = regExpsArr.filter(([key, ]) => key === name).flat();
  const regEx = regExpArr[1];
  if (typeof regEx !== 'string' && regEx.test(value)) {
    return true
  }
  else {
    return false
  }
}