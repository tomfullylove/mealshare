import React from 'react';

import Modal from 'react-native-modal';
import Slider from '@react-native-community/slider';

import Button from '../../components/atoms/Button';
import AltButton from '../../components/atoms/AltButton';
import CheckButtonGroup from '../../components/molecules/CheckButtonGroup';

import {
  Wrapper,
  Container,
  Title,
  TopContainer,
  ScrollContainer,
  FieldContainer,
  FieldTitle,
  BottomContainer,
} from './assets/styles';

const diets = [
  {id: '1', text: 'Vegan'},
  {id: '2', text: 'Vegetarian'},
];

const cuisines = [
  {id: '1', text: 'American'},
  {id: '2', text: 'Italian'},
  {id: '3', text: 'Indian'},
  {id: '4', text: 'Spanish'},
  {id: '5', text: 'Portuguese'},
  {id: '6', text: 'Vietnamese'},
];

const allergens = [
  {id: '1', text: 'Celery'},
  {id: '2', text: 'Cereal'},
  {id: '3', text: 'Crustaceans'},
  {id: '4', text: 'Egg'},
  {id: '5', text: 'Fish'},
  {id: '6', text: 'Lupin'},
  {id: '7', text: 'Milk'},
  {id: '8', text: 'Molluscs'},
  {id: '9', text: 'Mustard'},
  {id: '10', text: 'Nuts'},
  {id: '11', text: 'Peanuts'},
  {id: '12', text: 'Sesame'},
  {id: '13', text: 'Soya'},
  {id: '14', text: 'Sulphites'},
];

interface Props {
  close: () => void;
  visible: boolean;
}

const Filters: React.FC<Props> = ({visible, close}) => {
  return (
    <Modal 
      isVisible={visible} 
      propagateSwipe
      style={{
        marginBottom: 0,
        marginLeft: 0,
        marginRight: 0,
      }}
    >
      <Wrapper>
        <Container>
          <TopContainer>
            <Title>Filters</Title>
          </TopContainer>
          <ScrollContainer>
            <FieldContainer>
              <FieldTitle>Diet</FieldTitle>
              <CheckButtonGroup items={diets} />
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>Cuisine</FieldTitle>
              <CheckButtonGroup items={cuisines} />
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>Price</FieldTitle>
              {/* TODO: disable scroll when slider is active */}
              <Slider
                // eslint-disable-next-line react-native/no-inline-styles
                style={{marginLeft: 6, marginRight: 6}}
                value={8}
                minimumValue={1}
                maximumValue={8}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>Portions</FieldTitle>
              {/* TODO: disable scroll when slider is active */}
              <Slider
                // eslint-disable-next-line react-native/no-inline-styles
                style={{marginLeft: 6, marginRight: 6}}
                value={1}
                minimumValue={1}
                maximumValue={8}
              />
            </FieldContainer>
            <FieldContainer>
              <FieldTitle>Allergens</FieldTitle>
              <CheckButtonGroup items={allergens} />
            </FieldContainer>
          </ScrollContainer>
          <BottomContainer>
            <AltButton onPress={() => {}} text="Clear" alt />
            <Button onPress={close} text="Show Results" />
          </BottomContainer>
        </Container>
      </Wrapper>
    </Modal>
  );
};

export default Filters;
