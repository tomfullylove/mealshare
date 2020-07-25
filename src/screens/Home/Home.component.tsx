import React, {useState} from 'react';

import MapView from 'react-native-maps';

import InputDisplay from '../../components/molecules/InputDisplay';
import Button from '../../components/atoms/Button';
import FilterModal from '../../modals/Filters';
import DateTimeModal from '../../modals/DateTime';
import LocationModal from '../../modals/DateTime';
import AllItems from '../../components/templates/lists/AllItems';

import {
  Container,
  TopContainer,
  Spacer,
  BottomContainer,
  LocationContainer,
} from './assets/styles';

const Home: React.FC = () => {
  const [filtersVisible, showFiltersModal] = useState(false);
  const [dateTimeVisible, showDateTimeModal] = useState(false);
  const [locationVisible, showLocationModal] = useState(false);
  return (
    <>
      <Container>
        <MapView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          initialRegion={{
            latitude: 51.498941,
            longitude: -3.1711347,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        />
        <TopContainer>
          <InputDisplay 
            icon="calendar-outline"
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
        <BottomContainer>
          <LocationContainer>
            <InputDisplay 
                icon="location-outline"
                text="3 miles" 
                subtext="Ninian Road" 
                onPress={(): void => {
                  showDateTimeModal(true);
                }}
            />
          </LocationContainer>
          <AllItems />
        </BottomContainer>
      </Container>
      <FilterModal visible={filtersVisible} close={() => showFiltersModal(false)} />
      <DateTimeModal visible={dateTimeVisible} close={() => showDateTimeModal(false)} />
      <LocationModal visible={locationVisible} close={() => showLocationModal(false)} />
    </>
  );
};

export default Home;
