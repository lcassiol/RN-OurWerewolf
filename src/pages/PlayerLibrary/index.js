import React from 'react';
import { ImageBackground } from 'react-native';
import { MaterialIcons, AntDesign } from '@expo/vector-icons';

import background from '../../assets/backgroundwithouttext.png';

import {
  Container,
  Content,
  PlayersList,
  Player,
  PlayerImage,
  PlayerName,
  Button,
} from './styles';

import DefaultImage from '../../assets/unknown_profile.png';

export default function PlayerLibrary() {
  const canAddNew = true;
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
    {
      id: 4,
      name: 'Normax',
    },
    {
      id: 5,
      name: 'Normax',
    },
    {
      id: 6,
      name: 'Normax',
    },
    {
      id: 7,
      name: 'Normax',
    },
    {
      id: 8,
      name: 'Normax',
    },
    {
      id: 9,
      name: 'Normax',
    },
    {
      id: 10,
      name: 'Normax',
    },
    {
      id: 11,
      name: 'Normax',
    },
    {
      id: 12,
      name: 'Normax',
    },
    {
      id: 13,
      name: 'Normax',
    },
    {
      id: 14,
      name: 'Normax',
    },
    {
      id: 15,
      name: 'Normax',
    },
    {
      id: 16,
      name: 'Normax',
    },
    {
      id: 17,
      name: 'Normax',
    },
    {
      id: 18,
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
          <Button>
            {canAddNew ? (
              <AntDesign name="plus" size={30} color="white" />
            ) : (
              <MaterialIcons name="done" size={35} color="white" />
            )}
          </Button>
        </Content>
      </Container>
    </ImageBackground>
  );
}
