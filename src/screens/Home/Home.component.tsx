import React, {useState} from 'react';

import {RefreshControl} from 'react-native';

import PageContainer from '../../components/atoms/PageContainer';
import InputDisplay from '../../components/molecules/InputDisplay';
import Button from '../../components/atoms/Button';
import IconText from '../../components/atoms/IconText';
import AllItems from '../../components/templates/lists/AllItems';
import FilterModal from '../../modals/Filters';
import DateTimeModal from '../../modals/DateTime';
import LocationModal from '../../modals/DateTime';
import TabSelector from '../../components/molecules/TabSelector';

import IconDate from '../../assets/icon-date.png';
import IconLoc from '../../assets/icon-location.png';

import {
  TopContainer,
  Spacer,
  ScrollContainer,
  Container,
  BottomContainer,
  LocationContainer,
} from './assets/styles';

const Home: React.FC = () => {
  const [filtersVisible, showFiltersModal] = useState(false);
  const [dateTimeVisible, showDateTimeModal] = useState(false);
  const [locationVisible, showLocationModal] = useState(false);
  return (
    <>
      <PageContainer>
        <TopContainer>
          <InputDisplay 
            icon={IconDate} 
            text="5pm - 7pm" 
            subtext="Today" 
            onPress={(): void => {
              showDateTimeModal(true);
            }}
          />
          <Spacer />
          <Button
            onPress={(): void => {
              showFiltersModal(true);
            }}
            text="Filters"
          />
        </TopContainer>
        <ScrollContainer
          refreshControl={
            <RefreshControl refreshing={false} onRefresh={(): void => {}} />
          }>
          <Container>
            <AllItems />
          </Container>
        </ScrollContainer>
        <BottomContainer>
          <LocationContainer>
            <InputDisplay 
                icon={IconLoc} 
                text="3 miles" 
                subtext="Ninian Road" 
                onPress={(): void => {
                  showDateTimeModal(true);
                }}
            />
          </LocationContainer>
          <TabSelector />
        </BottomContainer>
      </PageContainer>
      <FilterModal visible={filtersVisible} close={() => showFiltersModal(false)} />
      <DateTimeModal visible={dateTimeVisible} close={() => showDateTimeModal(false)} />
      <LocationModal visible={locationVisible} close={() => showLocationModal(false)} />
    </>
  );
};

export default Home;
