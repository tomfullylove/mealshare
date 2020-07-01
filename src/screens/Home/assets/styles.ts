import Styled from 'styled-components/native';

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px;
`;

export const Spacer = Styled.View`
  width: 16px;
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const Container = Styled.View`
  padding: 0 14px;
`;

export const BottomContainer = Styled.View`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  padding: 8px;
  width: 100%;
`;

export const LocationContainer = Styled.View`
  max-width: 80%;
  height: 40px;
  margin-bottom: 8px;
  align-self: center;
`;
