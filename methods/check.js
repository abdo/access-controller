const a = require('./a');
const areUrlsCompatible = require('../helpers/areUrlsCompatible');

const check = {
  checkedRole: {},
  checkedAbilities: [],
  checkedAbility: {}, // { verb, url, condition }
  output: true,
  urlPairs: {},

  if: (name) => {
    check.checkedRole = a(name);

    // Initialization of attributes
    check.checkedAbility = {};
    check.output = true;
    check.urlPairs = {};

    return check;
  },

  can: (verb) => {
    const checkedAbilities = check.checkedRole.abilities.filter(
      (ability) => ability.verb === verb
    );
    if (checkedAbilities.length === 0) {
      check.output = false;
    } else {
      check.checkedAbilities = checkedAbilities;
    }

    return check;
  },

  to: (url) => {
    let urlPairs = '';
    let uniqueCheckedAbility = '';
    check.checkedAbilities.forEach((checkedAbility) => {
      if (!checkedAbility.url) {
        check.output = false;
      } else {
        const currentUrlPairs = areUrlsCompatible(url, checkedAbility.url);
        if (currentUrlPairs) {
          urlPairs = currentUrlPairs;
          check.checkedAbility = checkedAbility;
        }
      }
    });

    if (!urlPairs) {
      check.output = false;
    }

    if (!check.checkedAbility.condition) {
      return check.output;
    }

    check.urlPairs = urlPairs;

    return check;
  },

  from: (url) => check.to(url),

  when: (userAttributes) => {
    return check.checkedAbility.condition(check.urlPairs, userAttributes);
  },

  getResult: () => check.output
};

module.exports = check;
