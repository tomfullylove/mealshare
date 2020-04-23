import React from 'react';

import {Text} from './assets/styles';

interface Props {
  price: number;
}

const LargeListItem: React.FC<Props> = ({price}) => {
  return <Text>{`£${String(price)}`}</Text>;
};

export default LargeListItem;
