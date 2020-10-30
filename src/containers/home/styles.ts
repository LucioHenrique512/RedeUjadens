import styled from 'styled-components/native';
import {Text} from 'react-native';
import {colors} from '../../constants';

export const Container = styled.ScrollView`
  padding: 0px 0px;
`;

interface StyledText {
  size?: number;
}
export const StyledText = styled(Text)<StyledText>`
  color: ${colors.TEXT_COLOR};
  font-size: ${({size}) => (size ? `${size}px` : '16px')};
  margin-bottom: 15px;
  margin-left: 15px;
`;

export const DestaquesContainer = styled.View`
  width: 100%;
  margin: 10px 0px;
`;

export const MainContent = styled.View`
  width: 100%;
  padding: 0px 15px;
`;
