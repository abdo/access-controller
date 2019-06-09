const savedRoles = require('../common/savedRoles');

const a = (name) => {
  return savedRoles.roles.find((role) => role.name === name);
};

module.exports = a;
