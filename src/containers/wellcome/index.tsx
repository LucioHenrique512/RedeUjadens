import React from 'react';
import {Button} from '../../components';
import {
  Container,
  StyledText,
  Image,
  ButtonsContainer,
  BoldText,
  Content,
  GreetingsText,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const Wellcome = () => {
  const navigation = useNavigation();

  const handleClickLogin = () => navigation.navigate('login');
  const handleClickRegistrer = () => navigation.navigate('register');

  return (
    <Container>
      <Content>
        <Image source={require('../../assets/logo/Logo.png')} />
        <ButtonsContainer>
          <GreetingsText>
            Seja {'\n'}
            <BoldText>Bem Vindo!</BoldText>
          </GreetingsText>
          <StyledText>
            App official da rede <BoldText>UJADENS</BoldText>
          </StyledText>
          <Button
            marginBottom
            fullWidth
            onPress={handleClickLogin}
            text="Entrar"
          />
          <Button
            outline
            fullWidth
            onPress={handleClickRegistrer}
            text="Registrar"
          />
        </ButtonsContainer>
      </Content>
    </Container>
  );
};

export default Wellcome;
