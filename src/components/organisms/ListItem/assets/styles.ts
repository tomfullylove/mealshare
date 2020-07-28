import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  width: 300px;
  background-color: ${colors.white};
  border-radius: 12px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
`;

export const Image = Styled.Image`
  width: 100%;
  height: 140px;
  borderTopLeftRadius: 12px;
  borderTopRightRadius: 12px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
`;

export const LeftContainer = Styled.View`
  display: flex;
  flex-direction: column;
`;

export const RightContainer = Styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Title = Styled.Text`
  font-size: 17px;
`;

export const RowContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const Text = Styled.Text`
  font-size: 14px;
  color: ${colors.grey};
  margin-left: 4px;
`;
