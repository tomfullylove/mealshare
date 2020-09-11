import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../../utils/colors';

export const Container = Styled.TouchableOpacity`
  width: 300px;
  shadow-color: ${colors.shadow};
  shadow-offset: 0px 3px;
  shadow-opacity: 1;
  margin-bottom: 6px;
`;

export const Backdrop = Styled(LinearGradient)`
  border-radius: 14px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const Image = Styled.ImageBackground`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 300px;
  border-radius: 14px;
  overflow: hidden;
  padding: 6px 10px;
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
  line-height: 15px;
  margin: 4px 0;
`;

export const BottomContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InfoContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const InfoBox = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${colors.lighterGrey};
  border-radius: 20px;
  height: 19px;
  padding: 0 10px;
`;

export const InfoSpacer = Styled.View`
  width: 6px;
`;

export const InfoText = Styled.Text`
  font-size: 11px;
  color: ${colors.black};
  font-weight: 500;
`;
