import React from 'react';
import {FlatList} from 'react-native';
import MealCard from '../../../organisms/MealCard';

import {Spacer} from './assets/styles';

interface Props {
  listRef: React.RefObject<any>;
  meals: any;
  setFocusedMeal: (meal) => void;
  showMeal: (arg0: any) => void;
}

const List = React.forwardRef((props, ref) => {
  const renderItem = ({item}) => {
    return (
      <MealCard
        onPress={() => props.showMeal(item)}
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

const AllItems: React.FC<Props> = ({
  meals,
  listRef,
  setFocusedMeal,
  showMeal,
}) => {
  return (
    <List
      ref={listRef}
      meals={meals}
      setFocusedMeal={setFocusedMeal}
      showMeal={showMeal}
    />
  );
};

export default AllItems;
