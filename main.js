const a = require('./methods/a');
const check = require('./methods/check');
const createRole = require('./methods/createRole');
const areUrlsCompatible = require('./helpers/areUrlsCompatible');

createRole('student');
a('student')
  .can('post')
  .to('you');

a('student')
  .can('ha')
  .from('/:you');
