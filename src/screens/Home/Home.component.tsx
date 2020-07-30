import React, {useState, useRef} from 'react';

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

const LATITUDE_OFFSET = 0

const Home: React.FC<Props> = ({meals}) => {
  const [filtersVisible, showFiltersModal] = useState(false);
  const [dateTimeVisible, showDateTimeModal] = useState(false);
  const [locationVisible, showLocationModal] = useState(false);
  const [focusedMeal, setMealRegion] = useState(meals[0]);
  const map = useRef(null);
  const mealList = useRef(null);
  const setFocusedMeal = (meal, scroll = true) => {
    setMealRegion(meal);
    if (map && map.current) {
      map.current.animateToRegion({latitude: meal.location.latitude - LATITUDE_OFFSET, longitude: meal.location.longitude});
    }
    if (scroll && mealList && mealList.current) {
      mealList.current.scrollToItem({item: meal});
    }
  };

  return (
    <>
      <Container>
        <MapView
          ref={map}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          rotateEnabled={false}
          initialRegion={{
            latitude: meals[0].location.latitude - LATITUDE_OFFSET,
            longitude: meals[0].location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}>
          {meals.map((meal) => (
            <Marker
              key={meal.id}
              coordinate={meal.location}
              onPress={(): void => setFocusedMeal(meal)}>
              <MapMarker selected={meal === focusedMeal} />
            </Marker>
          ))}
        </MapView>
        <TopContainer>
          <InputDisplay
            icon="calendar"
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
              icon="locate"
              text="3 km"
              subtext="Ninian Road"
              onPress={(): void => {
                showDateTimeModal(true);
              }}
            />
          </LocationContainer>
          <AllItems
            listRef={mealList}
            meals={meals}
            setFocusedMeal={(meal) => setFocusedMeal(meal, false)}
          />
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
