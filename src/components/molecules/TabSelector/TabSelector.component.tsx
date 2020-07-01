import React from 'react';

import {Container, SelectedContainer, Text} from './assets/styles';

const TabSelector: React.FC = () => {
  return (
    <Container>
      <SelectedContainer>
        <Text selected>List</Text>
      </SelectedContainer>
      <Text>Map</Text>
    </Container>
  );
};

export default TabSelector;
