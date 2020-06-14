import React from 'react';

import {Modal} from 'react-native';

import Button from '../../components/atoms/Button';
import AltButton from '../../components/atoms/AltButton';

import {
  SafeArea,
  Container,
  Title,
  TopContainer,
  ScrollContainer,
  BottomContainer,
} from './assets/styles';

interface Props {
  close: () => void;
  visible: boolean;
}

const Filters: React.FC<Props> = ({visible, close}) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <SafeArea>
        <Container>
          <TopContainer>
            <Title>Filters</Title>
          </TopContainer>
          <ScrollContainer />
          <BottomContainer>
            <AltButton onPress={() => {}} text="Clear" alt />
            <Button onPress={close} text="Show Results" />
          </BottomContainer>
        </Container>
      </SafeArea>
    </Modal>
  );
};

export default Filters;
