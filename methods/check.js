const a = require('./a');

const check = {
  checkedRole: {},
  checkedAbility: {},
  output: true, // default value

  if: (name) => {
    check.checkedRole = a(name);

    return check;
  },

  can: (verb) => {
    const checkedAbility = check.checkedRole.abilities.find(
      (ability) => ability.verb === verb
    );
    if (!checkedAbility) {
      check.output = false;
    } else {
      check.checkedAbility = checkedAbility;
    }

    return check;
  },

  to: (object) => {},

  from: (object) => check.to(object)
};

module.exports = check;
