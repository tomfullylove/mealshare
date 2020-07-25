import React from 'react';

import AltButton from '../../atoms/AltButton';

import {Container, ItemContainer, Spacer} from './assets/styles';

type Item = {
  id: string;
  text: string;
};

interface Props {
  items: Array<Item>;
}

const CheckButtonGroup: React.FC<Props> = ({items}) => {
  return (
    <Container>
      {items.map((item: Item, index: number) => (
        <ItemContainer key={item.id}>
          <AltButton
            id={item.id}
            small
            onPress={() => {}}
            text={item.text}
            active={index == 3 || index == 4 || index == 1 || index == 10 || index == 11}
          />
          {index !== items.length && <Spacer />}
        </ItemContainer>
      ))}
    </Container>
  );
};

export default CheckButtonGroup;
