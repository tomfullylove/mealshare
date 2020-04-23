import React from 'react';
import IconStar from '../../../assets/icon-star.png';

import {Container, Text, Icon} from './assets/styles';

interface Props {
  rating: number;
}

const StarRating: React.FC<Props> = ({rating}) => {
  return (
    <Container>
      <Text>{String(rating)}</Text>
      <Icon source={IconStar} />
    </Container>
  );
};

export default StarRating;
