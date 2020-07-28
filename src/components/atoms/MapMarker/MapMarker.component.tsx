import React from 'react';

import {Marker} from './assets/styles';

interface Props {
  selected: boolean;
}

const MapMarker: React.FC<Props> = ({selected}) => {
  return <Marker selected={selected} />;
};

export default MapMarker;
