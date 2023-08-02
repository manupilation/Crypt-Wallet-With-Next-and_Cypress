// https://www.horadecodar.com.br/2020/09/07/expressao-regular-para-validar-e-mail-javascript-regex/

export function emailChecker(email) {
  const regex = /\S+@\S+\.\S+/;

  return regex.test(email);
}

export function passwordChecker(password) {
  const expectedLength = 6;

  return password.length >= expectedLength;
}
