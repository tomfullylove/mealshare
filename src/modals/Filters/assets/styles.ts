import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const FieldContainer = Styled.View`
  margin-bottom: 16px;
`;

export const FieldTitle = Styled.Text`
  font-family: Quicksand;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  color: ${colors.black};
  padding:0 0 8px 4px;
`;
