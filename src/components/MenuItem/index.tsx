import * as React from 'react';
import {Container, IconContainer} from './styles';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';


interface MenuItemProps {
  label: String;
  icon: String;
}

const MenuItem = ({label, icon}: MenuItemProps) => {
  return (
    <Container rippleColor={"#ffffff"}>
      <IconContainer>
        <Icon name={`${icon}`} size={30} color="rgba(0,0,0,0.5)" />
      </IconContainer>
      <Text
        style={{fontSize: 25, fontWeight: 'bold', color: 'rgba(0,0,0,0.7)'}}>
        {label}
      </Text>
    </Container>
  );
};

export default MenuItem;
