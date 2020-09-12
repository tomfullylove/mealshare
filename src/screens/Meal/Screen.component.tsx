import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../utils/colors';
import StarRating from '../../components/atoms/StarRating';
import Button from '../../components/atoms/Button';
import InputDisplay from '../../components/molecules/InputDisplay';
import PortionModal from '../../modals/Portion';

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
  Spacer,
} from './assets/styles';

const Screen: React.FC = ({ navigation }) => {
  const [portionVisible, showPortionModal] = useState(false);
  return (
    <>
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
            <InputDisplay
              icon="people-outline"
              text="3"
              subtext="Portions"
              onPress={(): void => {
                showPortionModal(true);
              }}
            />
            <Spacer />
            <Button onPress={() => {}} text={'Buy meal'} />
          </BottomContainer>
        </Content>
      </Container>
      <PortionModal
        visible={portionVisible}
        close={() => showPortionModal(false)}
      />
    </>
  );
};

export default Screen;
