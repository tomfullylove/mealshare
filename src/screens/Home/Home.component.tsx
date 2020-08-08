import React, {useState, useRef} from 'react';

import MapView, {Marker} from 'react-native-maps';

import {Props} from './Home.container';
import InputDisplay from '../../components/molecules/InputDisplay';
import Button from '../../components/atoms/Button';
import FilterModal from '../../modals/Filters';
import DateTimeModal from '../../modals/DateTime';
import DistanceModal from '../../modals/Distance';
import AllItems from '../../components/templates/lists/AllItems';
import MapMarker from '../../components/atoms/MapMarker';

import {
  Container,
  TopContainer,
  Spacer,
  BottomContainer,
  LocationContainer,
} from './assets/styles';

const LATITUDE_OFFSET = 0;

const Home: React.FC<Props> = ({meals}) => {
  const [filtersVisible, showFiltersModal] = useState(false);
  const [dateTimeVisible, showDateTimeModal] = useState(false);
  const [locationVisible, showLocationModal] = useState(false);
  const [focusedMeal, setMealRegion] = useState(meals[0]);
  const map = useRef(null);
  const mealList = useRef(null);
  // REFACTOR
  const setFocusedMeal = (meal, setRegion = true, scroll = true) => {
    setMealRegion(meal);
    if (setRegion && map && map.current) {
      map.current.animateToRegion({
        latitude: meal.location.latitude - LATITUDE_OFFSET,
        longitude: meal.location.longitude,
      });
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
              onPress={(): void => setFocusedMeal(meal, false, true)}>
              <MapMarker selected={meal === focusedMeal} />
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
              icon="locate"
              text="3 km"
              subtext="Ninian Road"
              onPress={(): void => {
                showLocationModal(true);
              }}
            />
          </LocationContainer>
          <AllItems
            listRef={mealList}
            meals={meals}
            setFocusedMeal={(meal) => setFocusedMeal(meal, true, false)}
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
      <DistanceModal
        visible={locationVisible}
        close={() => showLocationModal(false)}
      />
    </>
  );
};

export default Home;
