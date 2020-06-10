import React from 'react';

import {Container, Icon, Text, Subtext} from './assets/styles';

interface Props {
  icon: string;
  subtext: string;
  text: string;
}

const InputDisplay: React.FC<Props> = ({icon, text, subtext}) => {
  return (
    <Container>
      <Icon source={icon} />
      <Text>{text}</Text>
      <Subtext>{subtext}</Subtext>
    </Container>
  );
};

export default InputDisplay;
