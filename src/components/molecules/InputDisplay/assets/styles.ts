import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 1;
  height: 40px;
  padding: 0 18px 0 16px;
  background-color: ${colors.white};
  border-radius: 20px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 3px;
  shadow-opacity: 1;
`;

export const Text = Styled.Text`
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.black};
`;

export const Subtext = Styled.Text`
  margin-left: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${colors.grey};
`;
