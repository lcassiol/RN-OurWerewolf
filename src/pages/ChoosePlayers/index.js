import React from 'react';
import { ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import background from '../../assets/backgroundwithouttext.png';
import {
  Container,
  AddPlayer,
  Title,
  Content,
  PlayersList,
  Player,
  PlayerImage,
  PlayerName,
  Button,
  TextButton,
} from './styles';

import DefaultImage from '../../assets/unknown_profile.png';

export default function ChoosePlayers({ navigation }) {
  const data = [
    {
      id: 1,
      name: 'Jubileu',
    },
    {
      id: 2,
      name: 'Javax',
    },
    {
      id: 3,
      name: 'Normax',
    },
  ];

  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ flex: 1 }}
    >
      <Container>
        <AddPlayer onPress={() => navigation.navigate('AddNewPlayer')}>
          <Title>Adicione novos jogadores</Title>
          <AntDesign name="pluscircleo" size={27} color="white" />
        </AddPlayer>
        <Content>
          <PlayersList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: 'flex-start',
            }}
            renderItem={({ item }) => {
              return (
                <Player>
                  <PlayerImage source={DefaultImage} />
                  <PlayerName>{item.name}</PlayerName>
                </Player>
              );
            }}
          />
        </Content>
        <Button>
          <TextButton>PRÓXIMO</TextButton>
        </Button>
      </Container>
    </ImageBackground>
  );
}
