import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface StyledProps {
  alt: boolean;
}

export const Container = Styled.TouchableOpacity<StyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 48px;
  border: 1px solid ${({alt}) => (alt ? colors.lightGrey : colors.black)};
  border-radius: 24px;
  padding: 0 24px;
`;

export const Text = Styled.Text<StyledProps>`
  font-size: 16px;
  color: ${({alt}) => (alt ? colors.grey : colors.black)};
`;
