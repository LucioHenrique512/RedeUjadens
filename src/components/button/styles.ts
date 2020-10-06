import styled from 'styled-components/native';
import {colors} from '../../constants';

interface StyledButtonProps {
  marginBottom?: boolean;
  outline?: boolean;
  fullWidth?: boolean;
  margin?: any;
}

export const Container = styled.TouchableOpacity<StyledButtonProps>`
  width: ${({fullWidth}) => (fullWidth ? '100%' : 'auto')};
  height: 50px;
  background: ${({outline}) => (!outline ? colors.PRIMARY : 'transparent')};
  border: ${({outline}) => (!outline ? `none` : `${colors.PRIMARY} solid 3px`)};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 4px;
  margin: ${({margin}) => (margin ? margin : '0')}px;
  margin-bottom: ${({marginBottom}) => (!marginBottom ? '0' : '25')}px;
`;

export const StyledText = styled.Text<StyledButtonProps>`
  color: ${colors.TEXT_COLOR};
  text-transform: uppercase;
  font-weight: bold;
  color: ${({outline}) => (!outline ? colors.FOREGROUND : colors.PRIMARY)};
`;
