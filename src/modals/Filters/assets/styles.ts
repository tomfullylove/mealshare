import Styled from 'styled-components/native';

import colors from '../../../utils/colors';

export const Wrapper = Styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

export const Container = Styled.View`
  borderTopLeftRadius: 17px;
  borderTopRightRadius: 17px;
  background-color: ${colors.background};
  height: 90%;
`;

export const TopContainer = Styled.View`
  padding: 20px;
`;

export const Title = Styled.Text`
  font-size: 19px;
  font-weight: 600;
  width: 100%;
  color: ${colors.grey};
`;

export const ScrollContainer = Styled.ScrollView`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 16px;
`;

export const FieldContainer = Styled.View`
  margin-bottom: 16px;
`;

export const FieldTitle = Styled.Text`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  color: ${colors.black};
  padding:0 0 8px 4px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`;