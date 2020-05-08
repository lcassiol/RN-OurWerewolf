import React, { useState } from 'react';
import { View, ImageBackground, Switch, ScrollView } from 'react-native';

import {
  Container,
  Random,
  Title,
  Content,
  Papers,
  Line,
  Category,
  NextButton,
  TextButton,
} from './styles';

import Paper from '../../components/Paper';
import background from '../../assets/backgroundwithouttext.png';

const ChoosePapers = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const unTagged = [
    {
      id: 1,
      name: 'Aldeão',
    },
    {
      id: 2,
      name: 'Aprendiz de vidente',
    },
    {
      id: 3,
      name: 'Aprendiz de vidente',
    },
    {
      id: 4,
      name: 'Aprendiz de vidente',
    },
  ];

  return (
    <ImageBackground
      source={background}
      imageStyle={{ resizeMode: 'stretch' }}
      style={{ flex: 1 }}
    >
      <Container>
        <ScrollView>
          <Random>
            <Title>Modo de papéis aleatórios</Title>
            <Switch
              trackColor={{ false: '#767577', true: '#f4f3f4' }}
              thumbColor={isEnabled ? '#81b0ff' : '#81b0ff'}
              ios_backgroundColor="#666"
              style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Random>
          <Content>
            <Papers
              data={unTagged}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              renderItem={({ item }) => {
                return <Paper paper={item} />;
              }}
            />

            <Line />
            <Category>Aldeões Felizes</Category>
            <Papers
              data={unTagged}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              renderItem={({ item }) => {
                return <Paper paper={item} />;
              }}
            />

            <Line />
            <Category>Aldeões Irritados</Category>
            <Papers
              data={unTagged}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              renderItem={({ item }) => {
                return <Paper paper={item} />;
              }}
            />

            <Line />
            <Category>Equipe dos lobisomens</Category>
            <Papers
              data={unTagged}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              renderItem={({ item }) => {
                return <Paper paper={item} />;
              }}
            />

            <Line />
            <Category>Papeis avançados</Category>
            <Papers
              data={unTagged}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: 'flex-start',
              }}
              renderItem={({ item }) => {
                return <Paper paper={item} />;
              }}
            />
          </Content>
        </ScrollView>
        <NextButton onPress={() => navigation.navigate('ChoosePapers')}>
          <TextButton>PRÓXIMO</TextButton>
        </NextButton>
      </Container>
    </ImageBackground>
  );
};

export default ChoosePapers;
