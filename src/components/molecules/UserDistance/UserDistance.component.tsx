import React from 'react';
import IconExample from '../../../assets/icon-user-small.png';

import {Container, Icon, Text} from './assets/styles';

interface Props {
  distance: number;
}

const UserDistance: React.FC<Props> = ({distance}) => {
  return (
    <Container>
      <Icon source={IconExample} />
      <Text>{`${String(distance)} km`}</Text>
    </Container>
  );
};

export default UserDistance;
