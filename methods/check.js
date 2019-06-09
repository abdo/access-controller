const a = require('./a');
const areUrlsCompatible = require('../helpers/areUrlsCompatible');

const check = {
  checkedRole: {},
  checkedAbility: {}, // { verb, url, condition }
  output: true,
  urlPairs: {},

  if: (name) => {
    check.checkedRole = a(name);

    // Initialization of variables
    check.checkedAbility = {};
    check.output = true;
    check.urlPairs = {};

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

  to: (url) => {
    let urlPairs = '';
    if (!check.checkedAbility.url) {
      check.output = false;
    } else {
      urlPairs = areUrlsCompatible(url, check.checkedAbility.url);
    }

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
    console.log('check.urlPairs', check.urlPairs);
    console.log('userAttributes', userAttributes);
    return check.checkedAbility.condition(check.urlPairs, userAttributes);
  }
};

module.exports = check;
