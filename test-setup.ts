import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {JSDOM} from 'jsdom';

const {document} = new JSDOM('', {url: 'https://jest.com'}).window;
global.document = document;
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

configure({adapter: new Adapter()});
