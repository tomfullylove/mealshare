import Styled from 'styled-components/native';

export const Container = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Spacer = Styled.View`
  width: 8px;
`;

export const LocationContainer = Styled.View`
  margin: 12px 0 12px 14px;
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
`;

export const Title = Styled.Text`
  margin-bottom: 12px;
  font-size: 16px;
`;
