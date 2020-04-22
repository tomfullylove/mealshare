import React from 'react';
import PageContainer from '../../components/atoms/PageContainer';
import AltButton from '../../components/atoms/AltButton';

import {Container} from './assets/styles';

const Main: React.FC = () => {
  return (
    <PageContainer>
      <Container>
        <AltButton onPress={(): void => {}} text="Filters" />
      </Container>
    </PageContainer>
  );
};

export default Main;
