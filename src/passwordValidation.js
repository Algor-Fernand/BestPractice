export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * Checks if a given password is valid or invalid.
 * If valid it returns true, otherwise false
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  //checks if the password is not one of the forbidden password
  if (forbiddenPasswords.includes(password)) return false;

  //checks if there are special characters.
  if (!/w/.test(password)) return false;

  if (!password.length === 10) return false;

  //checks there should be atleast one capital letter, lower letter and digit.
  if (
    !/[A-Z]/.test(password) ||
    !/[a-z]/.test(password) ||
    !/\d/.test(password)
  )
    return false;
  //checks for sequential pattern ascending or descending order of the numbers passwords.
  const sequentialPattern =
    /(?:0123|1234|2345|3456|4567|5678|6789|7890|0987|9876|8765|7654|6543|5432|4321|3210)/;
  if (sequentialPattern.test(password)) return false;
  //checks if there are only 4 variance in characters.
  const setOfPassword = new Set(password);
  if (setOfPassword.size < 4) return false;
  return true;
}
