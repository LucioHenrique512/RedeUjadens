import styled from 'styled-components/native';
import {colors} from '../../constants';
//import {Dimensions} from 'react-native';

//const {height} = Dimensions.get('screen');

export const Container = styled.View`
  height: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const LogoContainer = styled.View`
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  height: 116px;
  width: 126px;
`;

export const FormContainer = styled.ScrollView`
  background: ${colors.FOREGROUND};
  width: 100%;
  height: 100%;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 25px;
  bottom: -12px;
  
`;

export const RowButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

interface StyledTextProps {
  marginBottom?: Boolean;
}

export const StyledText = styled.Text<StyledTextProps>`
  color: ${colors.TEXT_COLOR};
  font-size: 16px;
  margin-bottom: ${({marginBottom}) => (marginBottom ? '25px' : '0px')};
`;

export const BoldText = styled.Text`
  font-weight: bold;
`;
