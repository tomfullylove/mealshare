import React from 'react';
import {RefreshControl} from 'react-native';
import PageContainer from '../../components/atoms/PageContainer';
import InputDisplay from '../../components/molecules/InputDisplay';
import AltButton from '../../components/atoms/AltButton';
import IconText from '../../components/atoms/IconText';
import FeaturedItems from '../../components/templates/FeaturedItems';
import AllItems from '../../components/templates/AllItems';

import IconCalendar from '../../assets/icon-calendar.png';
import IconLocPin from '../../assets/icon-location-pin.png';

import {
  TopContainer,
  Spacer,
  LocationContainer,
  ScrollContainer,
  Title,
  Container,
} from './assets/styles';

const Home: React.FC = () => {
  return (
    <PageContainer>
      <TopContainer>
        <InputDisplay icon={IconCalendar} text="5pm - 7pm" subtext="Today" />
        <Spacer />
        <AltButton onPress={(): void => {}} text="Filters" />
      </TopContainer>
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
        <Container>
          <AllItems />
        </Container>
      </ScrollContainer>
    </PageContainer>
  );
};

export default Home;
