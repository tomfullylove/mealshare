import React from 'react';

import SlideUp from '../templates/SlideUp';

import {Container} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const DateTime: React.FC<Props> = ({visible, close}) => {
  return (
    <SlideUp
      visible={visible}
      close={close}
      title="Pickup time"
      buttonText="Show results"
      altButtonText="Reset"
      buttonPress={close}
      altButtonPress={() => {}}>
      <Container />
    </SlideUp>
  );
};

export default DateTime;
