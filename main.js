const a = require('./methods/a');
const check = require('./methods/check');
const createRole = require('./methods/createRole');
const areUrlsCompatible = require('./helpers/areUrlsCompatible');

createRole('admin');
createRole('user');
createRole('guest');

a('admin')
  .can('get')
  .from('/users');

a('admin')
  .can('post')
  .to('/users');

a('user')
  .can('post')
  .to('/users/:userId/articles')
  .when((params, user) => user.id === params.userId);

a('guest')
  .can('get')
  .from('/articles');
