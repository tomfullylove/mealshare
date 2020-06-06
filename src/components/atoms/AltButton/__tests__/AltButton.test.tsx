import React from 'react';
import {shallow} from 'enzyme';

import AltButton from '../AltButton.component';

describe('AltButton', () => {
  it('renders correctly for one error', () => {
    const component = shallow(
      <AltButton onPress={jest.fn()} text="Press Me" />,
    );
    expect(component).toMatchSnapshot();
  });
});
