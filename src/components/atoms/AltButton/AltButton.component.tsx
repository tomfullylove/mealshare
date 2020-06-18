import React from 'react';

import {Container, Text} from './assets/styles';

interface Props {
  id?: string;
  alt?: boolean;
  onPress: () => void;
  small?: boolean;
  text: string;
}

const AltButton: React.FC<Props> = ({id, alt, small, onPress, text}) => {
  return (
    <Container id={id} alt={alt} small={small} onPress={onPress}>
      <Text alt={alt} small={small}>
        {text}
      </Text>
    </Container>
  );
};

export default AltButton;
