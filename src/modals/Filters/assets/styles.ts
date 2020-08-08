import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const FieldContainer = Styled.View`
  margin-bottom: 16px;
`;

export const FieldTitle = Styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: ${colors.black};
  padding:0 0 8px 4px;
`;
