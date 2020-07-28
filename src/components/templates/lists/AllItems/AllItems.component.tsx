import React from 'react';
import ListItem from '../../../organisms/ListItem';

import {Container} from './assets/styles';

interface Props {
  meals: any;
}

const AllItems: React.FC<Props> = ({meals}) => {
  return (
    <Container horizontal showsHorizontalScrollIndicator={false}>
      {meals.map((meal) => (
        <ListItem
          key={meal.uuid}
          name={meal.title}
          portions={meal.portions}
          rating={meal.rating}
          price={meal.price}
          distance={meal.price}
        />
      ))}
    </Container>
  );
};

export default AllItems;
