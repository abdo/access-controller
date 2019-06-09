## This is an access controller that can be used by an API in order to limit access for specific roles

```
import acl from 'acl';

// create different roles
acl.createRole('employee');
acl.createRole('teacher');
acl.createRole('student');

// set access rules for each role
import { a, an } from 'acl';
// teacher can list all papers
a('teacher').can('get').from('/papers');
// teacher can create a paper
a('teacher').can('post').to('/papers');
// student can post a paper only when it's his data
a('student').can('post').to('/papers/:paperId').when((params, user) =>
user.id === params.paperId);
// employee can list all papers
an('employee').can('get').from('/papers');

// check
import { check } from 'acl';
check.if('teacher').can('post').to('/papers'); // true
check.if('teacher').can('patch').to('/papers'); // false
check.if('student').can('post').to('/papers/10').when({ id: 10 }); // true

```

Hint: When you are checking for accessibility (using the 'check' method) and you want to stop at a method lower than that specified while setting access rules, you can use the getResult chained method
For example:

```
check.if('student').can('post').to('/papers/10').when({ id: 10 }); // true
check.if('student').can('post').to('/papers/10').getResult(); // also true
```
