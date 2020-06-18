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
            alt
            small
            onPress={() => {}}
            text={item.text}
          />
          {index !== items.length && <Spacer />}
        </ItemContainer>
      ))}
    </Container>
  );
};

export default CheckButtonGroup;
