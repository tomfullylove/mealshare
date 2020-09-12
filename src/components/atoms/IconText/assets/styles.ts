import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = Styled.Image`
  margin-right: 8px;
`;

export const Text = Styled.Text`
  font-family: Quicksand;
  font-size: 15px;
  color: ${colors.grey};
`;
