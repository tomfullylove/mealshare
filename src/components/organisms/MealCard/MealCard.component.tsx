import React from 'react';
import StarRating from '../../atoms/StarRating';
import Price from '../../atoms/Price';
import UserDistance from '../../molecules/UserDistance';

import {
  Container,
  Image,
  TitleContainer,
  Title,
  RowContainer,
  SubTitle,
  Text,
  BottomContainer,
  InfoContainer,
} from './assets/styles';

interface Props {
  name: string;
  rating: number;
  portions: number;
  price: number;
  distance: number;
}

const MealCard: React.FC<Props> = ({
  name,
  rating,
  portions,
  price,
  distance,
}) => {
  return (
    // <Container>
    //   <Image source={require('../../../assets/food.jpg')} />
    //   <BottomContainer>
    //     <LeftContainer>
    //       <Title>{name}</Title>
    //       <RowContainer>
    //         <StarRating rating={rating} />
    //         <Text>{portions} portions left</Text>
    //       </RowContainer>
    //     </LeftContainer>
    //     <RightContainer>
    //       <Price textSize={22} price={price} />
    //       <UserDistance distance={distance} />
    //     </RightContainer>
    //   </BottomContainer>
    // </Container>
    <Container>
      <Image source={require('../../../assets/food.jpg')}>
        <TitleContainer>
          <Title>{name}</Title>
          <RowContainer>
            <StarRating rating={rating} />
            <SubTitle>Vietnamese</SubTitle>
          </RowContainer>
        </TitleContainer>
        <Text>
          Lorem ipsum dolor amet chicharrones meditation af marfa, cred green juice blue bottle kickstarter..
        </Text>
        <BottomContainer>
          <InfoContainer />
          <Price textSize={26} price={price} />
        </BottomContainer>
      </Image>
    </Container>
  );
};

export default MealCard;
