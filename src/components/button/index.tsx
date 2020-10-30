import * as React from "react";
import {Container, StyledText} from './styles';

interface ButtonProps {
  text?: String;
  marginBottom?: boolean;
  outline?: boolean;
  onPress: Function;
  fullWidth?: boolean;
  children?: React.ReactNode;
  margin?: Number;
}

const Button = ({
  text,
  marginBottom,
  outline,
  onPress,
  fullWidth,
  children,
  margin,
}: ButtonProps) => {
  return (
    <Container
      outline={outline}
      onPress={() => onPress()}
      marginBottom={true}
      fullWidth={fullWidth}
      margin={margin}>
      {text ? <StyledText outline={outline}>{text}</StyledText> : null}
      {children}
    </Container>
  );
};

export default Button;
