import React from 'react';

import {Container, Text} from './assets/styles';

interface Props {
  onPress: () => void;
  text: string;
}

const AltButton: React.FC<Props> = ({onPress, text}) => {
  return (
    <Container onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
};

export default AltButton;
