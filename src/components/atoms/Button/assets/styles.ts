import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  background-color: ${colors.main};
  border-radius: 24px;
  padding: 0 24px;
`;

export const Text = Styled.Text`
  font-size: 16px;
  color: ${colors.white};
`;
