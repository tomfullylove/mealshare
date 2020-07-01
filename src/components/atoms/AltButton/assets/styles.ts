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
  height: ${({small}): number => (small ? 32 : 40)}px;
  border: 1px solid ${({alt}) => (alt ? colors.black : colors.black)};
  border-radius: 20px;
  padding: 0 ${({small}): number => (small ? 16 : 20)}px;
`;

export const Text = Styled.Text<StyledProps>`
  font-size: ${({small}): number => (small ? 12 : 14)}px;
  color: ${({alt}) => (alt ? colors.black : colors.black)};
  font-weight: ${({small}): number => (small ? 400 :500)};
`;
