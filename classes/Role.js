class Role {
  constructor(name) {
    this.name = name;
    this.abilities = []; // { verb, object, condition }
  }

  can(verb) {
    this.abilities.push({ verb });
    return this;
  }

  to(object) {
    this.abilities[this.abilities.length - 1].object = object;
    return this;
  }

  from(object) {
    this.to(object);
  }
}

module.exports = Role;
