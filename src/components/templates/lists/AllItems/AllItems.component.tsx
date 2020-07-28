import React from 'react';
import {FlatList} from 'react-native';
import ListItem from '../../../organisms/ListItem';

import {Spacer} from './assets/styles';

interface Props {
  listRef: React.RefObject<any>;
  meals: any;
  setFocusedMeal: (meal) => void;
}

const List = React.forwardRef((props, ref) => {
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
      ref={ref}
      horizontal
      showsHorizontalScrollIndicator={false}
      data={props.meals}
      renderItem={renderItem}
      ItemSeparatorComponent={Spacer}
      decelerationRate={0}
      snapToInterval={316}
      onMomentumScrollEnd={(event) => {
        const xOffset = event.nativeEvent.contentOffset.x;
        const scrollToIndex = Math.round(xOffset / 316);
        props.setFocusedMeal(props.meals[scrollToIndex]);
      }}
    />
  );
});

const AllItems: React.FC<Props> = ({meals, listRef, setFocusedMeal}) => {
  return <List ref={listRef} meals={meals} setFocusedMeal={setFocusedMeal} />;
};

export default AllItems;
