import React from 'react';

import Modal from 'react-native-modal';

import {
  Container,
} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const DateTime: React.FC<Props> = ({visible, close}) => {
  return (
    <Modal 
      isVisible={visible} 
      onSwipeComplete={close} 
      swipeDirection="down" 
    >
      <Container />
    </Modal>
  );
};

export default DateTime;
