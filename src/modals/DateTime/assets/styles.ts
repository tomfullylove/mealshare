import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Container = Styled.View`
  border-radius: 17px;
  background-color: ${colors.background};
  height: 60%;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 12px 8px; 
`;