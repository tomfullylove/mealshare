import React from 'react';
import PageContainer from '../../components/atoms/PageContainer';
import InputDisplay from '../../components/molecules/InputDisplay';
import AltButton from '../../components/atoms/AltButton';
import IconText from '../../components/atoms/IconText';

import IconCalendar from '../../assets/icon-calendar.png';
import IconLocCurrent from '../../assets/icon-location-current.png';
import IconLocPin from '../../assets/icon-location-pin.png';

import {Container, Spacer, LocationContainer, Title} from './assets/styles';

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
        <IconText icon={IconLocPin} text="Ninian Road Cardiff CF23 5EN" />
      </LocationContainer>
      <Title>Recommended for you</Title>
    </PageContainer>
  );
};

export default Main;
