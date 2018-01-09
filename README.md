# Installation Instructions:

1. ` npm install --save-dev enzyme enzyme-adapter-react-16 `
2. ` npm install --save-dev chai chai-enzyme@beta `
3. ` npm install --save-dev sinon sinon-chai `

# Setup Instructions:

1. Create a file called ` setupTests.js ` in ` src ` directory.
2. In ` setupTests.js ` write:

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
```

3. In your App.test.js file (or whichever component you're testing), add the following:

```
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme());

import yourComponentName from './yourComponentFileName'
```

Required instructions:

http://airbnb.io/enzyme/

https://github.com/producthunt/chai-enzyme#installation

http://airbnb.io/enzyme/docs/guides/mocha.html


Fix issues with chai-enzyme:
https://github.com/producthunt/chai-enzyme/issues/199
https://github.com/producthunt/chai-enzyme/issues/213

use ` npm install --save-dev chai-enzyme@beta ` in order to work with React 16 and Enzyme 3
