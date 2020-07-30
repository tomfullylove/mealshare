import Styled from 'styled-components/native';

import colors from '../../../../utils/colors';

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Text = Styled.Text`
  font-size: 16px;
  margin-right: 2px;
  color: ${colors.white};
  font-weight: 500;
`;
