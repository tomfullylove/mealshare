import React from 'react';

import {Container, Icon, Text, Subtext} from './assets/styles';

interface Props {
  onPress: () => void;
  icon: string;
  subtext: string;
  text: string;
}

const InputDisplay: React.FC<Props> = ({onPress, icon, text, subtext}) => {
  return (
    <Container onPress={onPress}>
      <Icon source={icon} />
      <Text>{text}</Text>
      <Subtext>{subtext}</Subtext>
    </Container>
  );
};

export default InputDisplay;
