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
  const [revealName, setRevealName] = useState(true);
  const [discussionTimer, setDiscussionTimer] = useState(true);
  const [killFirstRound, setKillFirstRound] = useState(true);
  const [nightActions, setNightActions] = useState(true);
  const [playerResignVote, setPlayerResignVote] = useState(true);
  const [secretVote, setSecretVote] = useState(true);

  function changeDefaultConfig() {
    const enable = getDefaultConfig();
    setDefaultConfig(!enable);

    if (!enable) {
      setGameMode('narrador');
      setRevealName(true);
      setDiscussionTimer(true);
      setKillFirstRound(true);
      setNightActions(true);
      setPlayerResignVote(true);
      setSecretVote(true);
    }
  }

  function getDefaultConfig() {
    const enable =
      gameMode === 'narrador' &&
      defaultConfig &&
      revealName &&
      discussionTimer &&
      killFirstRound &&
      nightActions &&
      playerResignVote &&
      secretVote;

    return enable;
  }

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
              onValueChange={changeDefaultConfig}
              value={getDefaultConfig()}
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

            {gameMode === 'justPapers' ? (
              <Description>
                O aplicativo mostra apenas os papéis de cada jogador. Você vai
                precisar de um narrador humano para jogar o jogo. Para jogadores
                experientes.
              </Description>
            ) : (
              <>
                <Description>
                  O aplicativo gerencia o jogo mostrando a cada jogador seus
                  papéis, permitindo que eles performem ações durante a noite e
                  contando os votos durante o dia. Recomendado para jogadores
                  iniciantes.
                </Description>

                <Category>Geral</Category>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Revelar o nome do jogador quando ele morrer</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={revealName ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setRevealName((previousState) => !previousState)
                    }
                    value={revealName}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Desabilitar temporizador de discussão</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={discussionTimer ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setDiscussionTimer((previousState) => !previousState)
                    }
                    value={discussionTimer}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Não matar na primeira rodada</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={killFirstRound ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setKillFirstRound((previousState) => !previousState)
                    }
                    value={killFirstRound}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Ações noturnas dos aldeões</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={nightActions ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setNightActions((previousState) => !previousState)
                    }
                    value={nightActions}
                  />
                </View>

                <Category>Votação</Category>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Jogadores podem pular seus votos</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={playerResignVote ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setPlayerResignVote((previousState) => !previousState)
                    }
                    value={playerResignVote}
                  />
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}
                >
                  <Option>Voto secreto</Option>
                  <Switch
                    trackColor={{ false: '#767577', true: '#f4f3f4' }}
                    thumbColor={secretVote ? '#81b0ff' : '#81b0ff'}
                    ios_backgroundColor="#666"
                    style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
                    onValueChange={() =>
                      setSecretVote((previousState) => !previousState)
                    }
                    value={secretVote}
                  />
                </View>
              </>
            )}
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
