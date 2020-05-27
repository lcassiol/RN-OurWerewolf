import React, { useState, useEffect, useRef } from 'react';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

import { ImageBackground, KeyboardAvoidingView } from 'react-native';
import { View, Text, Platform } from 'react-native';

import background from '../../assets/backgroundwithouttext.png';
import DefaultImage from '../../assets/unknown_profile.png';

import {
  Content,
  PlayerImage,
  ButtonCamera,
  PlayerName,
  ButtonSave,
  ButtonText,
} from './styles';

export default function AddNewPlayer() {
  const camera = React.createRef();
  const [showCamera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  async function takePicture() {
    if (this.camera) {
      let photo = await camera.takePictureAsync();
      console.log(photo);
    }
  }

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
            {showCamera ? (
              <Camera
                style={{ width: 250, height: 300, marginTop: -20 }}
                ref={camera}
                type={type}
              />
            ) : (
              <ButtonCamera
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}
              >
                <PlayerImage source={DefaultImage} />
              </ButtonCamera>
            )}

            <ButtonCamera onPress={takePicture}>
              <MaterialIcons
                style={{ marginTop: -20 }}
                name="photo-camera"
                size={45}
                color="#000"
              />
              {hasPermission === false && (
                <Text>Acesso a camera rejeitado</Text>
              )}
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
