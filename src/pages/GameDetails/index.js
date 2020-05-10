import React, { useState } from 'react';
import {
  View,
  ImageBackground,
  Switch,
  ScrollView,
  Picker,
} from 'react-native';

import {
  Container,
  Random,
  Title,
  Content,
  Category,
  Description,
  Option,
  NextButton,
  TextButton,
} from './styles';

import background from '../../assets/backgroundwithouttext.png';

const GameDetails = () => {
  const [defaultConfig, setDefaultConfig] = useState(true);
  const [gameMode, setGameMode] = useState('narrador');

  const toggleSwitch = () =>
    setDefaultConfig((previousState) => !previousState);

  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ flex: 1 }}
    >
      <Container>
        <ScrollView>
          <Random>
            <Title>Usar configurações padrão</Title>
            <Switch
              trackColor={{ false: '#767577', true: '#f4f3f4' }}
              thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
              ios_backgroundColor="#666"
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              onValueChange={toggleSwitch}
              value={defaultConfig}
            />
          </Random>
          <Content>
            <Category>Modo de jogo</Category>
            <Picker
              style={{ marginTop: -40, marginBottom: -30 }}
              selectedValue={gameMode}
              onValueChange={(mode) => setGameMode(mode)}
            >
              <Picker.Item label="Narrador" value="narrador" />
              <Picker.Item
                label="Mostrar apenas os papéis"
                value="justPapers"
              />
            </Picker>

            <Description>
              O aplicativo gerencia o jogo mostrando a cada jogador seus papéis,
              permitindo que eles performem ações durante a noite e contando os
              votos durante o dia. Recomendado para jogadores iniciantes
            </Description>

            <Category>Geral</Category>
            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Revelar o nome do jogador quando ele morrer</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Desabilitar temporizador de discussão</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Não matar na primeira rodada</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Ações noturnas dos aldeões</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>

            <Category>Votação</Category>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Jogadores podem pular seus votos</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>

            <View
              style={{ flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <Option>Voto secreto</Option>
              <Switch
                trackColor={{ false: '#767577', true: '#f4f3f4' }}
                thumbColor={defaultConfig ? '#81b0ff' : '#81b0ff'}
                ios_backgroundColor="#666"
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                onValueChange={toggleSwitch}
                value={defaultConfig}
              />
            </View>
          </Content>
        </ScrollView>
        <NextButton onPress={() => navigation.navigate('ChoosePapers')}>
          <TextButton>INICIAR JOGO</TextButton>
        </NextButton>
      </Container>
    </ImageBackground>
  );
};

export default GameDetails;
