import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  background-color: ${colors.main};
  border-radius: 20px;
  padding: 0 20px;
  shadow-color: ${colors.mainShadow};
  shadow-offset: 0px 3px;
  shadow-opacity: 1;
`;

export const Text = Styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-weight: 600;
`;
