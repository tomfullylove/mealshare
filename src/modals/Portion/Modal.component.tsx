import React from 'react';

import SlideUp from '../templates/SlideUp';
import TabSelector from '../../components/molecules/TabSelector';

import {FieldContainer} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const Modal: React.FC<Props> = ({visible, close}) => {
  return (
    <SlideUp
      visible={visible}
      close={close}
      title="Portions"
      buttonText="Select"
      altButtonText="Reset"
      buttonPress={close}
      altButtonPress={() => {}}>
      <FieldContainer>
        <TabSelector />
      </FieldContainer>
    </SlideUp>
  );
};

export default Modal;
