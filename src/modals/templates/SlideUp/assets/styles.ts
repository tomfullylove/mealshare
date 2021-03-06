import Styled from 'styled-components/native';

import colors from '../../../../utils/colors';

export const Wrapper = Styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Container = Styled.SafeAreaView`
  borderTopLeftRadius: 17px;
  borderTopRightRadius: 17px;
  background-color: ${colors.background};
  max-height: 100%;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 12px 8px;
`;

export const Title = Styled.Text`
  font-family: Quicksand;
  padding: 8px 8px 0;
  font-size: 19px;
  font-weight: 700;
  color: ${colors.grey};
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 16px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
