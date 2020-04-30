import React from "react";
import { ImageBackground } from "react-native";

import background from "../../assets/backgroundwithouttext.png";
import { Container, Title, Button, TextButton } from "./styles";

export default function ChoosePlayers({ navigation }) {
  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: "stretch" }}
      style={{ flex: 1 }}
    >
      <Container>
        <Title>ChoosePlayers</Title>
      </Container>
    </ImageBackground>
  );
}
