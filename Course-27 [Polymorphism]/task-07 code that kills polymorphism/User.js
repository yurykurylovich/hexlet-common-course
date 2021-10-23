class User {
  constructor(name) {
    this.type = 'user';
    this.name = name;
  }
  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

export default User;
