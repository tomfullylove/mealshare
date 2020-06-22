import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  margin-bottom: 16px;
`;

export const Text = Styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: ${colors.black};
  padding:0 0 8px 4px;
`;
