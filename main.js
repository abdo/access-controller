const createRole = require('./methods/createRole');
const savedRoles = require('./common/savedRoles');

createRole('admin');

console.log(savedRoles.roles);
