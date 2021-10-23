class Guest {
  constructor(name) {
    this.type = 'guest';
    this.name = 'Guest';
  }
  getName() {
    return this.name;
  }

  getTypeName() {
    return this.type;
  }
}

export default Guest;
