import React from 'react';

import {Container, Text} from './assets/styles';

interface Props {
  id?: string;
  onPress: () => void;
  small?: boolean;
  text: string;
}

const AltButton: React.FC<Props> = ({id, small, onPress, text}) => {
  return (
    <Container id={id} onPress={onPress} small={small}>
      <Text small={small}>
        {text}
      </Text>
    </Container>
  );
};

export default AltButton;
