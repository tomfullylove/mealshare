import Styled from 'styled-components/native';

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 16px 0;
`;

export const Spacer = Styled.View`
  width: 16px;
`;

export const LocationContainer = Styled.View`
  margin: 12px 0 12px 24px;
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const Title = Styled.Text`
  font-weight: 500;
  margin: 0 16px 12px;
  font-size: 16px;
`;

export const Container = Styled.View`
  padding: 0 14px;
`;
