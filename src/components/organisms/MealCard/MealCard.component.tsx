import React from 'react';
import StarRating from '../../atoms/StarRating';
import Price from '../../atoms/Price';

import {
  Container,
  Backdrop,
  Image,
  TitleContainer,
  Title,
  RowContainer,
  SubTitle,
  Text,
  BottomContainer,
  InfoContainer,
  InfoBox,
  InfoText,
  InfoSpacer,
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
    <Container>
      <Image source={require('../../../assets/food.jpg')}>
        <Backdrop colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']} />
        <TitleContainer>
          <Title>{name}</Title>
          <RowContainer>
            <StarRating rating={rating} />
            <SubTitle>Vietnamese</SubTitle>
          </RowContainer>
        </TitleContainer>
        <Text>
          Lorem ipsum dolor amet chicharrones meditatio af marfa, cred green
          juice blue bottle kickstart..
        </Text>
        <BottomContainer>
          <InfoContainer>
            <InfoBox>
              <InfoText>6pm today</InfoText>
            </InfoBox>
            <InfoSpacer />
            <InfoBox>
              <InfoText>{portions} portions</InfoText>
            </InfoBox>
            <InfoSpacer />
            <InfoBox>
              <InfoText>{distance}km away</InfoText>
            </InfoBox>
          </InfoContainer>
          <Price textSize={26} price={price} />
        </BottomContainer>
      </Image>
    </Container>
  );
};

export default MealCard;
