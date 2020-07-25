import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import colors from '../../../utils/colors';

import {Container, Text} from './assets/styles';

interface Props {
  rating: number;
}

const StarRating: React.FC<Props> = ({rating}) => {
  return (
    <Container>
      <Text>{String(rating)}</Text>
      <Ionicons name="star" color={colors.yellow} size={14} />
    </Container>
  );
};

export default StarRating;
