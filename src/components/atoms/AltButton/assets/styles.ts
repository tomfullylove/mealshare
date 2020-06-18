import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface StyledProps {
  id?: string;
  alt?: boolean;
  small?: boolean;
}

export const Container = Styled.TouchableOpacity<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${({small}): number => (small ? 32 : 48)}px;
  border: 1px solid ${({alt}) => (alt ? colors.lightGrey : colors.black)};
  border-radius: 24px;
  padding: 0 24px;
`;

export const Text = Styled.Text<StyledProps>`
  font-size: ${({small}): number => (small ? 12 : 16)}px;
  color: ${({alt}) => (alt ? colors.grey : colors.black)};
`;
