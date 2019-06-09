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
    console.log(checkedAbility);
    if (!checkedAbility) {
      check.output = false;
    }
    return check;
  }
};

module.exports = check;
