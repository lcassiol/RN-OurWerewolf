import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import {
  View,
  TextInput,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Button,
  Keyboard,
} from 'react-native';

import background from '../../assets/backgroundwithouttext.png';
import DefaultImage from '../../assets/unknown_profile.png';

import {
  Container,
  Content,
  PlayerImage,
  ButtonCamera,
  PlayerName,
  ButtonSave,
  ButtonText,
} from './styles';

export default function AddNewPlayer() {
  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ flex: 1 }}
    >
      <Content>
        <KeyboardAvoidingView
          behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
          keyboardVerticalOffset="20"
        >
          <View style={{ padding: 24, flex: 1, justifyContent: 'center' }}>
            <ButtonCamera>
              <PlayerImage source={DefaultImage} />
              <MaterialIcons
                style={{ marginTop: -30 }}
                name="photo-camera"
                size={45}
                color="#000"
              />
            </ButtonCamera>

            <PlayerName placeholder="Nome do jogador(a)" />
            <ButtonSave>
              <ButtonText>Salvar</ButtonText>
              <MaterialIcons name="done" size={27} color="white" />
            </ButtonSave>
          </View>
        </KeyboardAvoidingView>
      </Content>
    </ImageBackground>
  );
}
