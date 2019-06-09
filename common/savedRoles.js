const roles = [];

const saveRole = (role) => {
  roles.push(role);
};

module.exports = {
  roles,
  saveRole
};
