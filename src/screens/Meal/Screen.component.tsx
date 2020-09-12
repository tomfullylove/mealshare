import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';
import PageContainer from '../../components/atoms/PageContainer';
import StarRating from '../../components/atoms/StarRating';

import {Image, Backdrop, TopContainer, TitleContainer, Title, RowContainer, SubTitle} from './assets/styles';

const Screen: React.FC = ({ navigation }) => {
  return (
    <PageContainer>
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
    </PageContainer>
  );
};

export default Screen;
