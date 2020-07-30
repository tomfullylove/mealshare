import Styled from 'styled-components/native';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  width: 300px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 2px;
  shadow-opacity: 1;
  margin-bottom: 6px;
`;

export const Image = Styled.ImageBackground`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 250px;
  border-radius: 14px;
  overflow: hidden;
  padding: 6px;
`;

export const TitleContainer = Styled.View`
  display: flex;
  flex-direction: column;
`;

export const Title = Styled.Text`
  font-size: 22px;
  font-weight: 500;
  color: ${colors.white};
`;

export const RowContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubTitle = Styled.Text`
  font-size: 16px;
  color: ${colors.white};
  margin-left: 4px;
  font-weight: 500;
`;

export const Text = Styled.Text`
  font-size: 12px;
  color: ${colors.white};
  font-weight: 500;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = Styled.View`
  display: flex;
  flex-direction: row;
`;