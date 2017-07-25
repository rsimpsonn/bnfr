export default class Exceptions {
  constructor() {}
  SignUpException(value) {
    this.value = value;
    this.message = ' the credentials do not work';
    this.toString = function () {
      return this.value + this.message;
    };
  }
}
