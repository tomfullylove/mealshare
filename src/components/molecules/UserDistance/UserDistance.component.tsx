import React from 'react';

import {Text} from './assets/styles';

interface Props {
  distance: number;
}

const UserDistance: React.FC<Props> = ({distance}) => {
  return <Text>{`${String(distance)} km`}</Text>;
};

export default UserDistance;
