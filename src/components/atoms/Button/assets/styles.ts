import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${colors.black};
  border-radius: 20px;
  padding: 0 20px;
`;

export const Text = Styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 500;
`;
