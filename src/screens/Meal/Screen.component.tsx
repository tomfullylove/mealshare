import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';
import StarRating from '../../components/atoms/StarRating';
import Button from '../../components/atoms/Button';

import {
  Container,
  Image,
  Backdrop,
  TopContainer,
  TitleContainer,
  Title,
  RowContainer,
  SubTitle,
  Content,
  BottomContainer,
} from './assets/styles';

const Screen: React.FC = ({ navigation }) => {
  return (
    <Container>
      <Image source={require('../../assets/food.jpg')}>
        <Backdrop colors={['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 1)']} />
        <TopContainer>
          <TitleContainer>
            <Title>Tandori chicken salad</Title>
            <RowContainer>
              <StarRating rating={3} />
              <SubTitle>Vietnamese</SubTitle>
            </RowContainer>
          </TitleContainer>
          <Ionicons
            name="close-outline"
            color={colors.white}
            size={45}
            onPress={() => navigation.goBack()}
          />
        </TopContainer>
      </Image>
      <Content>
        <BottomContainer>
          <Button onPress={() => {}} text={'Buy meal'} />
        </BottomContainer>
      </Content>
    </Container>
  );
};

export default Screen;
