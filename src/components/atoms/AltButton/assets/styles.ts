import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface StyledProps {
  id?: string;
  small?: boolean;
}

export const Container = Styled.TouchableOpacity<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({small}): number => (small ? 32 : 40)}px;
  background-color: ${colors.lighterGrey}
  border-radius: 20px;
  padding: 0 ${({small}): number => (small ? 16 : 20)}px;
`;

export const Text = Styled.Text<StyledProps>`
font-size: ${({small}): number => (small ? 12 : 14)}px;
  color: ${colors.black}
  font-weight: ${({small}): number => (small ? 400 :500)};
`;
