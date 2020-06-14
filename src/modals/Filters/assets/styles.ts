import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const SafeArea = Styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Container = Styled.View`
  borderTopLeftRadius: 17px;
  borderTopRightRadius: 17px;
  background-color: ${colors.background};
  height: 88%;
`;

export const TopContainer = Styled.View`
  padding: 20px;
`;

export const Title = Styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: ${colors.grey};
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;
