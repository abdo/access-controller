const a = require('./methods/a');
const createRole = require('./methods/createRole');

createRole('student');
a('student')
  .can('post')
  .to('you');

a('student')
  .can('post')
  .from('you');
