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
  height: 46px;
  padding: 8px;
  background-color: ${colors.black};
  border-radius: 20px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 0px;
  shadow-opacity: 1;
`;

export const SelectedContainer = Styled.View`
  padding-top: 6px;
  flex-grow: 1;
  background-color: ${colors.white};
  border-radius: 16px;
`;

export const Text = Styled.Text<TextProps>`
  text-align: center;
  flex-grow: 1
  font-size: 14px;
  color: ${({selected}): string => selected ? colors.black : colors.white};
  font-weight: 500;
`;
