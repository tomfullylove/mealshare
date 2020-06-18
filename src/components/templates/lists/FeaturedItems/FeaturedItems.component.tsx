import React from 'react';
import LargeListItem from '../../../organisms/LargeListItem';

import {ScrollContainer} from './assets/styles';

const FeaturedItems: React.FC = () => {
  return (
    <ScrollContainer horizontal contentInset={{right: 20, left: 20}}>
      <LargeListItem />
      <LargeListItem />
      <LargeListItem />
    </ScrollContainer>
  );
};

export default FeaturedItems;
