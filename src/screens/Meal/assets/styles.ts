import Styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../utils/colors';

export const Image = Styled.ImageBackground`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const Backdrop = Styled(LinearGradient)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const TopContainer = Styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px;
  align-items: flex-end;
`;


export const TitleContainer = Styled.View`
  display: flex;
  flex-direction: column;
  padding: 8px;
`;

export const Title = Styled.Text`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.white};
`;

export const RowContainer = Styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SubTitle = Styled.Text`
  font-size: 18px;
  color: ${colors.white};
  margin-left: 4px;
  font-weight: 500;
`;