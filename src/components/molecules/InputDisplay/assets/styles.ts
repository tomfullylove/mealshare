import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  height: 48px;
  padding: 0 16px;
  background-color: ${colors.white};
  border-radius: 17px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
`;

export const Icon = Styled.Image`
`;

export const Text = Styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
`;
