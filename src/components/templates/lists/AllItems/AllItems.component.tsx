import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../../../organisms/ListItem';

import {Spacer} from './assets/styles';

interface Props {
  meals: any;
}

const AllItems: React.FC<Props> = ({meals}) => {
  const renderItem = ({item}) => {
    return (
      <ListItem
        key={item.id}
        name={item.title}
        portions={item.portions}
        rating={item.rating}
        price={item.price}
        distance={item.price}
      />
    );
  };
  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={meals}
      renderItem={renderItem}
      ItemSeparatorComponent={Spacer}
    />
  );
};

export default AllItems;
