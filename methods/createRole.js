const savedRoles = require('../common/savedRoles');
const Role = require('../classes/Role');

const createRole = (name) => {
  const newRole = new Role(name);
  savedRoles.saveRole(newRole);
};

module.exports = createRole;
