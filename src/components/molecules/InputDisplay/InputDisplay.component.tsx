import React from 'react';

import {Container, Icon, Text, Subtext} from './assets/styles';
import { ImageSourcePropType } from 'react-native';

interface Props {
  onPress: () => void;
  icon: ImageSourcePropType;
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
