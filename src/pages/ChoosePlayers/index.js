import React from "react";
import { ImageBackground, FlatList } from "react-native";

import background from "../../assets/backgroundwithouttext.png";
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
} from "./styles";

import DefaultImage from "../../assets/unknown_profile.png";

export default function ChoosePlayers({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Jubileu",
    },
    {
      id: 2,
      name: "Javax",
    },
    {
      id: 3,
      name: "Normax",
    },
    {
      id: 4,
      name: "Cassio",
    },
    {
      id: 5,
      name: "OPa",
    },
    {
      id: 6,
      name: "Joel",
    },
    {
      id: 7,
      name: "Epa epa",
    },
    {
      id: 8,
      name: "Uol",
    },
    {
      id: 9,
      name: "ashu",
    },
    {
      id: 10,
      name: "Xxz",
    },
    {
      id: 11,
      name: "weaw",
    },
    {
      id: 12,
      name: "sklwo",
    },
    {
      id: 13,
      name: "Uol",
    },
    {
      id: 14,
      name: "Uol",
    },
    {
      id: 15,
      name: "EUyt",
    },
    {
      id: 16,
      name: "0oi0",
    },
  ];

  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: "stretch" }}
      style={{ flex: 1 }}
    >
      <Container>
        <AddPlayer>
          <Title>Adicione players +</Title>
        </AddPlayer>
        <Content>
          <PlayersList
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
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
