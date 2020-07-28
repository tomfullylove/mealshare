import React, {useState} from 'react';

import MapView, {Marker} from 'react-native-maps';

import {Props} from './Home.container';
import InputDisplay from '../../components/molecules/InputDisplay';
import Button from '../../components/atoms/Button';
import FilterModal from '../../modals/Filters';
import DateTimeModal from '../../modals/DateTime';
import LocationModal from '../../modals/DateTime';
import AllItems from '../../components/templates/lists/AllItems';
import MapMarker from '../../components/atoms/MapMarker';

import {
  Container,
  TopContainer,
  Spacer,
  BottomContainer,
  LocationContainer,
} from './assets/styles';

const Home: React.FC<Props> = ({meals}) => {
  const [filtersVisible, showFiltersModal] = useState(false);
  const [dateTimeVisible, showDateTimeModal] = useState(false);
  const [locationVisible, showLocationModal] = useState(false);
  const [mealRegion, setMealRegion] = useState(meals[0].location);
  return (
    <>
      <Container>
        <MapView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          region={{
            latitude: mealRegion.latitude,
            longitude: mealRegion.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}>
          {meals.map((meal) => (
            <Marker
              key={meal.uuid}
              coordinate={meal.location}
              onPress={(): void => setMealRegion(meal.location)}>
              <MapMarker selected={meal.location === mealRegion} />
            </Marker>
          ))}
        </MapView>
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
              text="3 km"
              subtext="Ninian Road"
              onPress={(): void => {
                showDateTimeModal(true);
              }}
            />
          </LocationContainer>
          <AllItems meals={meals} />
        </BottomContainer>
      </Container>
      <FilterModal
        visible={filtersVisible}
        close={() => showFiltersModal(false)}
      />
      <DateTimeModal
        visible={dateTimeVisible}
        close={() => showDateTimeModal(false)}
      />
      <LocationModal
        visible={locationVisible}
        close={() => showLocationModal(false)}
      />
    </>
  );
};

export default Home;
