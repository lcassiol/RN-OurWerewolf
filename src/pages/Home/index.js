import React from 'react';
import { ImageBackground } from 'react-native';

import background from '../../assets/background.png';
import { Container, Content, Button, TextButton } from './styles';

export default function Home({ navigation }) {
  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ flex: 1 }}
    >
      <Container>
        <Content>
          <Button onPress={() => navigation.navigate('ChoosePlayers')}>
            <TextButton>Novo Jogo</TextButton>
          </Button>
          <Button
            onPress={() =>
              navigation.navigate('PlayerLibrary', { canAdd: true })
            }
          >
            <TextButton>Biblioteca de jogadores</TextButton>
          </Button>
          <Button>
            <TextButton>Sobre</TextButton>
          </Button>
        </Content>
      </Container>
    </ImageBackground>
  );
}
