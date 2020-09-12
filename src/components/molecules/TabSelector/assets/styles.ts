import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface TextProps {
  selected?: boolean;
}

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
  height: 38px;
  padding: 4px;
  background-color: ${colors.lighterGrey}
  border-radius: 20px;
`;

export const SelectedContainer = Styled.View`
  padding-top: 8px;
  flex-grow: 1;
  background-color: ${colors.white}
  border-radius: 16px;
`;

export const Text = Styled.Text<TextProps>`
  font-family: Quicksand;
  text-align: center;
  flex-grow: 1;
  font-size: 12px;
  color: ${({selected}): string => selected ? colors.black : colors.black};
  font-weight: 600;
`;
