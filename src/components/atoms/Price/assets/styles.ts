import Styled from 'styled-components/native';

interface TextProps {
  textSize: number;
}

export const Text = Styled.Text<TextProps>`
  font-size: ${({textSize}): number => textSize}px;
`;
