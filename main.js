const a = require('./methods/a');
const check = require('./methods/check');
const createRole = require('./methods/createRole');

const acl = (module.exports = { createRole });
acl.a = a;
acl.an = a;
acl.check = check;
