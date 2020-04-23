import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = Styled.Image`
  margin-right: 4px;
`;

export const Text = Styled.Text`
  font-size: 10px;
  color: ${colors.grey};
`;
