import React from 'react';

import {Container, Icon, Text} from './assets/styles';

interface Props {
  icon: string;
  text: string;
}

const InputDisplay: React.FC<Props> = ({icon, text}) => {
  return (
    <Container>
      <Icon source={icon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default InputDisplay;
