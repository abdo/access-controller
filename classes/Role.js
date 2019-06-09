class Role {
  constructor(name) {
    this.name = name;
    this.abilities = [];
  }

  getName() {
    return this.name;
  }

  addAbility(verb, object, condition) {
    this.abilities.push({ verb, object, condition });
  }
}

export default Role;
