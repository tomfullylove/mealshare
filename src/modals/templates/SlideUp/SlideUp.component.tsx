import React from 'react';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';

import Button from '../../../components/atoms/Button';
import AltButton from '../../../components/atoms/AltButton';

import {
  Wrapper,
  Container,
  Title,
  TopContainer,
  ScrollContainer,
  BottomContainer,
} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
  title: string;
  buttonText: string;
  altButtonText: string;
  buttonPress: () => void;
  altButtonPress: () => void;
}

const SlideUp: React.FC<Props> = ({
  visible,
  close,
  title,
  children,
  buttonText,
  buttonPress,
  altButtonText,
  altButtonPress,
}) => {
  return (
    <Modal
      isVisible={visible}
      propagateSwipe
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
      }}
      swipeDirection="down"
      onSwipeComplete={close}>
      <Wrapper>
        <Container>
          <TopContainer>
            <Title>{title}</Title>
            <Ionicons
              name="close-outline"
              color={colors.grey}
              size={30}
              onPress={close}
            />
          </TopContainer>
          <ScrollContainer showsVerticalScrollIndicator={false}>
            {children}
          </ScrollContainer>
          <BottomContainer>
            <AltButton onPress={altButtonPress} text={altButtonText} />
            <Button onPress={buttonPress} text={buttonText} />
          </BottomContainer>
        </Container>
      </Wrapper>
    </Modal>
  );
};

export default SlideUp;
