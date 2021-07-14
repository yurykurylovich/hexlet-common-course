/* passwordValidator.js
Write a class PasswordValidator that takes two arguments:
--- minLength (8 by default) - min length of a password
--- containNumbers (true by default) - if the password must contain at least one digit.
Class has validate() method that checks if the argumented password meets all the (argumented or not) requirements of a class and returns an object with errors.
Possible errors:
minLength: 'too small'
containNumbers: 'should contain at least one number',
*/

class PasswordValidator {
  constructor(args = {}) {
    const def = {
      minLength: 8,
      containNumbers: true
    }
    this.args = {...def, ...args}
    this.minLength = this.args.minLength
    this.containNumbers = this.args.containNumbers
  }
  validate(password) {
    let errors = {}
    if (password.length < this.minLength) {
      errors.minLength = 'Password too small'
    }
    let nums = password.match(/\d/);

    if (this.containNumbers && !nums) {
      errors.containNumbers = 'Password should contain numbers'
    }
    return errors;
  }
}

const validator = new PasswordValidator({minLength: 6})
console.log(validator.validate('jfdk')) // {minLength: 'Password too small', containNumbers: 'Password should contain numbers'}

const newValidator = new PasswordValidator({minLength: 10, containNumbers: false})
console.log(newValidator.validate('jfkjkjk')) // { minLength: 'Password too small' }

