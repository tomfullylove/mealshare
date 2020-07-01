import React from 'react';

import {Container, Icon, Text} from './assets/styles';

interface Props {
  onPress?: () => void;
  icon: string;
  text: string;
}

const IconText: React.FC<Props> = ({onPress, icon, text}) => {
  return (
    <Container onPress={onPress}>
      <Icon source={icon} />
      <Text>{text}</Text>
    </Container>
  );
};

export default IconText;
