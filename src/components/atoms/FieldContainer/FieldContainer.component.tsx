import React from 'react';

import {Container, Text} from './assets/styles';

interface Props {
  text: string;
}

const FieldContainer: React.FC<Props> = ({text, children}) => {
  return (
    <Container>
      <Text>{text}</Text>
      {children}
    </Container>
  );
};

export default FieldContainer;
