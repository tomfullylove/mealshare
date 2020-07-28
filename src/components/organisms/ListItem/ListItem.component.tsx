import React from 'react';
import StarRating from '../../atoms/StarRating';
import Price from '../../atoms/Price';
import UserDistance from '../../molecules/UserDistance';

import {
  Container,
  Image,
  BottomContainer,
  LeftContainer,
  Title,
  RowContainer,
  Text,
  RightContainer,
} from './assets/styles';

interface Props {
  name: string;
  rating: number;
  portions: number;
  price: number;
  distance: number;
}

const ListItem: React.FC<Props> = ({
  name,
  rating,
  portions,
  price,
  distance,
}) => {
  return (
    <Container>
      <Image source={require('../../../assets/food.jpg')} />
      <BottomContainer>
        <LeftContainer>
          <Title>{name}</Title>
          <RowContainer>
            <StarRating rating={rating} />
            <Text>{portions} portions left</Text>
          </RowContainer>
        </LeftContainer>
        <RightContainer>
          <Price textSize={22} price={price} />
          <UserDistance distance={distance} />
        </RightContainer>
      </BottomContainer>
    </Container>
  );
};

export default ListItem;
