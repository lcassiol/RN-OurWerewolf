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
  const [photo, setPhoto] = useState(DefaultImage);
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
    console.log('tira foto!');
    if (camera) {
      let photo = await camera.current.takePictureAsync();
      console.log(photo);
      setShowCamera(false);
      setPhoto({ uri: photo.uri });
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
              <>
                <ButtonCamera
                  onPress={() => {
                    setType(
                      type === Camera.Constants.Type.back
                        ? Camera.Constants.Type.front
                        : Camera.Constants.Type.back
                    );
                  }}
                >
                  <Camera
                    style={{
                      width: 250,
                      height: 300,
                      marginTop: -80,
                    }}
                    ref={camera}
                    type={type}
                  >
                    <MaterialIcons
                      style={{
                        marginTop: -20,
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                      }}
                      name="cached"
                      size={45}
                      color="#999"
                    />
                  </Camera>
                </ButtonCamera>
                <ButtonCamera onPress={takePicture}>
                  <MaterialIcons
                    style={{ marginTop: -15 }}
                    name="photo-camera"
                    size={45}
                    color="#174c66"
                  />
                </ButtonCamera>
              </>
            ) : (
              <>
                <ButtonCamera onPress={() => setShowCamera(true)}>
                  <PlayerImage style={{ borderRadius: 200 }} source={photo} />
                  {hasPermission === false && (
                    <Text>Acesso a camera rejeitado</Text>
                  )}
                </ButtonCamera>
                <ButtonCamera onPress={() => setShowCamera(true)}>
                  <MaterialIcons
                    style={{ marginTop: -30 }}
                    name="photo-camera"
                    size={45}
                    color="#174c66"
                  />
                </ButtonCamera>
              </>
            )}

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
