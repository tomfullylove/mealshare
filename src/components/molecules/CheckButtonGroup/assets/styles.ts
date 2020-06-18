import Styled from 'styled-components/native';

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const ItemContainer = Styled.View`
  padding-bottom: 8px;
  display: flex;
  flex-direction: row;
`;

export const Spacer = Styled.View`
  width: 8px;
`;
