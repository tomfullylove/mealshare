import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  border: 1px solid ${colors.black};
  border-radius: 24px;
  padding: 0 24px;
`;

export const Text = Styled.Text`
  font-size: 16px;
  color: ${colors.black};
`;
