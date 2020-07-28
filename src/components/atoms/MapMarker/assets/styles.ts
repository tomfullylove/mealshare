import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

interface StyledProps {
  selected: boolean;
}

export const Marker = Styled.View<StyledProps>`
  background-color: ${colors.grey};
  height: 40px;
  width: 40px;
  border-radius: 20px;
  opacity: ${({selected}): number => (selected ? 0.7 : 0.2)};
`;
