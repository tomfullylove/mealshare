import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Image = Styled.Image`
  width: 100%;
  height: 150px;
  background-color: #9991;
  borderTopLeftRadius: 6px;
  borderTopRightRadius: 6px;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 4px 0;
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
  font-size: 15px;
`;

export const RowContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 2px;
`;

export const Text = Styled.Text`
  font-size: 12px;
  color: ${colors.grey};
  margin-left: 4px;
`;
