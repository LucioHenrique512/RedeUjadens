import * as React from 'react';
import {useEffect} from 'react';
import {Text, ToastAndroid} from 'react-native';
import {ImageSlider, MenuItem} from '../../components';
import {Container, DestaquesContainer, StyledText, MainContent} from './styles';
import {useSelector} from 'react-redux';
import {store} from '../../store';

const Home = () => {
  const {user} = useSelector((store: any) => store.authentication);
  useEffect(() => {
    ToastAndroid.show(
      `Seja bem vindo, ${user?.name.split(' ')[0]}. :)`,
      ToastAndroid.SHORT,
    );
  });
  return (
    <Container>
      <DestaquesContainer>
        <StyledText size={20}>Destaques</StyledText>
        <ImageSlider />
      </DestaquesContainer>
      <MainContent>
        <Text style={{color: '#FFFFFF', fontWeight: '100', marginBottom: 21}}>
          Principal
        </Text>
        <MenuItem label="EVENTOS" icon="calendar-alt" />
        <MenuItem label="BIBLIA" icon="bible" />
        <MenuItem label="MUSICA" icon="music" />
        <MenuItem label="RADIO & PODCASTS" icon="broadcast-tower" />
      </MainContent>
    </Container>
  );
};

export default Home;
