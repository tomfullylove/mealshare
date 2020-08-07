import React from 'react';

import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';

import {Container, TopContainer} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const DateTime: React.FC<Props> = ({visible, close}) => {
  return (
    <Modal
      isVisible={visible}
      onBackdropPress={close}
      onSwipeComplete={close}
      swipeDirection="down">
      <Container>
        <TopContainer>
          <Ionicons
            name="close-outline"
            color={colors.grey}
            size={30}
            onPress={close}
          />
        </TopContainer>
      </Container>
    </Modal>
  );
};

export default DateTime;
