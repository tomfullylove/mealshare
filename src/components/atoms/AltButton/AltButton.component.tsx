import React from 'react';

import {Container, Text} from './assets/styles';

interface Props {
  alt: boolean,
  onPress: () => void;
  text: string;
}

const AltButton: React.FC<Props> = ({alt, onPress, text}) => {
  return (
    <Container alt={alt} onPress={onPress}>
      <Text alt={alt}>{text}</Text>
    </Container>
  );
};

export default AltButton;
