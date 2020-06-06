import React from 'react';
import LargeListItem from '../../organisms/LargeListItem';

import {ScrollContainer} from './assets/styles';

const FeaturedItems: React.FC = () => {
  return (
    <ScrollContainer horizontal contentInset={{right: 20, left: 20}}>
      <LargeListItem
        name="Salmon and Noodles"
        cuisine="Chinese"
        rating={3}
        price={3.5}
        distance={2}
      />
      <LargeListItem
        name="Raspberry Cheesecake"
        cuisine="Dessert"
        rating={4}
        price={3}
        distance={1}
      />
    </ScrollContainer>
  );
};

export default FeaturedItems;
