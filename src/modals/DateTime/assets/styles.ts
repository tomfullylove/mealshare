import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Container = Styled.View`
  borderTopLeftRadius: 17px;
  borderTopRightRadius: 17px;
  borderBottomLeftRadius: 17px;
  borderBottomRightRadius: 17px;
  background-color: ${colors.background};
  height: 50%;
`;