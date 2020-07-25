import React from 'react';

import {Container, SelectedContainer, Text} from './assets/styles';

const TabSelector: React.FC = () => {
  return (
    <Container>
      <SelectedContainer>
        <Text selected>1</Text>
      </SelectedContainer>
      <Text>2</Text>
      <Text>3</Text>
      <Text>4</Text>
      <Text>5</Text>
      <Text>6</Text>
      <Text>7</Text>
      <Text>8</Text>
    </Container>
  );
};

export default TabSelector;
