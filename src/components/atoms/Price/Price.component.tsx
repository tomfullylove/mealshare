import React from 'react';

import {Text} from './assets/styles';

interface Props {
  price: number;
  textSize: number;
}

const LargeListItem: React.FC<Props> = ({price, textSize = 20}) => {
  return <Text textSize={textSize}>{`£${String(price)}`}</Text>;
};

export default LargeListItem;
