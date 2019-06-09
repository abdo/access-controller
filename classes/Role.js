class Role {
  constructor(name) {
    this.name = name;
    this.abilities = []; // [{ verb, url, condition },..]
  }

  can(verb) {
    this.abilities.push({ verb });
    return this;
  }

  to(url) {
    this.abilities[this.abilities.length - 1].url = url;
    return this;
  }

  from(url) {
    this.to(url);
  }

  when(fn) {
    this.abilities[this.abilities.length - 1].condition = fn;
    return this;
  }
}

module.exports = Role;
