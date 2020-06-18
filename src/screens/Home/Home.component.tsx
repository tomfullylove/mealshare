import React, {useState} from 'react';

import {RefreshControl} from 'react-native';

import PageContainer from '../../components/atoms/PageContainer';
import InputDisplay from '../../components/molecules/InputDisplay';
import AltButton from '../../components/atoms/AltButton';
import IconText from '../../components/atoms/IconText';
import AllItems from '../../components/templates/lists/AllItems';
import FilterModal from '../../modals/Filters';

import IconCalendar from '../../assets/icon-calendar.png';
import IconLoc from '../../assets/icon-location.png';

import {
  TopContainer,
  Spacer,
  LocationContainer,
  ScrollContainer,
  Container,
} from './assets/styles';

const Home: React.FC = () => {
  const [visible, showModal] = useState(false);
  return (
    <>
      <PageContainer>
        <TopContainer>
          <InputDisplay icon={IconCalendar} text="5pm - 7pm" subtext="Today" />
          <Spacer />
          <AltButton
            alt
            onPress={(): void => {
              showModal(true);
            }}
            text="Filters"
          />
        </TopContainer>
        <LocationContainer>
          <IconText icon={IconLoc} text="Ninian Road Cardiff" />
        </LocationContainer>
        <ScrollContainer
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={(): void => {}} />
          }>
          <Container>
            <AllItems />
          </Container>
        </ScrollContainer>
      </PageContainer>
      <FilterModal visible={visible} close={() => showModal(false)} />
    </>
  );
};

export default Home;
