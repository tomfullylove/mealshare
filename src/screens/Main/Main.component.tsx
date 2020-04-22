import React from 'react';
import {RefreshControl} from 'react-native';
import PageContainer from '../../components/atoms/PageContainer';
import InputDisplay from '../../components/molecules/InputDisplay';
import AltButton from '../../components/atoms/AltButton';
import IconText from '../../components/atoms/IconText';
import FeaturedItems from '../../components/organisms/FeaturedItems';

import IconCalendar from '../../assets/icon-calendar.png';
import IconLocCurrent from '../../assets/icon-location-current.png';
import IconLocPin from '../../assets/icon-location-pin.png';

import {
  Container,
  Spacer,
  LocationContainer,
  ScrollContainer,
  Title,
} from './assets/styles';

const Main: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <InputDisplay icon={IconCalendar} text="13:00, 13th Dec" />
        <Spacer />
        <InputDisplay icon={IconLocCurrent} text="4 km" />
        <Spacer />
        <AltButton onPress={(): void => {}} text="Filters" />
      </Container>
      <LocationContainer>
        <IconText icon={IconLocPin} text="Ninian Road Cardiff" />
      </LocationContainer>
      <ScrollContainer
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={(): void => {}} />
        }>
        <Title>Recommended for you</Title>
        <FeaturedItems />
        <Title>All meals</Title>
      </ScrollContainer>
    </PageContainer>
  );
};

export default Main;
