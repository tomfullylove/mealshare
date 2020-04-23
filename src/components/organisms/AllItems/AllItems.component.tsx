import React from 'react';
import ListItem from '../../organisms/ListItem';

import {Container} from './assets/styles';

const AllItems: React.FC = () => {
  return (
    <Container>
      <ListItem
        name="Beef Ramen"
        portions={4}
        rating={4}
        price={4.5}
        distance={1}
      />
      <ListItem
        name="Fish Pie"
        portions={2}
        rating={4}
        price={4}
        distance={1}
      />
      <ListItem
        name="Vegan Salad"
        portions={2}
        rating={3}
        price={3}
        distance={3}
      />
      <ListItem
        name="Chicken Fajitas"
        portions={6}
        rating={3}
        price={2.5}
        distance={2}
      />
      <ListItem
        name="Veg Lasanga"
        portions={5}
        rating={4}
        price={4}
        distance={1}
      />
    </Container>
  );
};

export default AllItems;
