import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface TextProps {
  textSize: number;
}

export const Text = Styled.Text<TextProps>`
  font-size: ${({textSize}): number => textSize}px;
  color: ${colors.white};
  font-weight: 500;
`;
