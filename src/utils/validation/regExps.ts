export const regExs = {
  login: /^[a-zA-Z0-9-_\.]{3,19}[a-zA-Z][a-zA-Z0-9-_\.]{0,1}$/,
  password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  old_password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  password_repeat: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  new_password: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  new_password_repeat: /(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
  email: /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,}$/,
  first_name: /^[а-яА-ЯёЁa-zA-Z-_]+$/,
  second_name: /^[а-яА-ЯёЁa-zA-Z-_]+$/,
  display_name: /^[а-яА-ЯёЁa-zA-Z-_]+$/,
  phone: /^[\+]?[0-9]{10,15}$/,
  search: /^.*$/,
  message: /^.*$/,
}

