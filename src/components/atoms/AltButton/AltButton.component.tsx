import React from 'react';

import {Container, SelectedContainer, Text} from './assets/styles';

interface Props {
  active?: boolean;
  id?: string;
  onPress: () => void;
  small?: boolean;
  text: string;
}

const AltButton: React.FC<Props> = ({id, small, onPress, active, text}) => {
  return (
    <Container id={id} onPress={onPress}>
      <SelectedContainer small={small} active={active}>
        <Text small={small}>
          {text}
        </Text>
      </SelectedContainer>
    </Container>
  );
};

export default AltButton;
