import React from 'react';

import SlideUp from '../templates/SlideUp';

import {Container} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const Distance: React.FC<Props> = ({visible, close}) => {
  return (
    <SlideUp
      visible={visible}
      close={close}
      title="Distance"
      buttonText="Show results"
      altButtonText="Reset"
      buttonPress={close}
      altButtonPress={() => {}}>
      <Container />
    </SlideUp>
  );
};

export default Distance;
