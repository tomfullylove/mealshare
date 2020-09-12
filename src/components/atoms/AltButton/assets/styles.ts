import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface StyledProps {
  id?: string;
  active?: boolean;
  small?: boolean;
}

export const Container = Styled.TouchableOpacity<StyledProps>`
  background-color: ${colors.lighterGrey};
  border-radius: 20px;
  padding: 4px;
`;

export const SelectedContainer = Styled.TouchableOpacity<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 ${({small}): number => (small ? 16 : 20)}px;
  background-color: ${({active}): string =>
    active ? colors.white : colors.lighterGrey};
  border-radius: 20px;
  height: ${({small}): number => (small ? 24 : 32)}px;
`;

export const Text = Styled.Text<StyledProps>`
  font-family: Quicksand;
  font-size: ${({small}): number => (small ? 12 : 14)}px;
  color: ${colors.black};
  font-weight: 600;
`;
