import React from 'react';
import { TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

const AppStack = createStackNavigator();

import Home from './pages/Home';
import ChoosePlayers from './pages/ChoosePlayers';
import AddNewPlayer from './pages/AddNewPlayer';
import PlayerLibrary from './pages/PlayerLibrary';
import ChoosePapers from './pages/ChoosePapers';
import GameDetails from './pages/GameDetails';

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator
        screenOptions={{
          headerShown: true,
          headerTransparent: true,
        }}
      >
        <AppStack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="ChoosePlayers"
          component={ChoosePlayers}
          options={({ navigation }) => ({
            headerBackTitleVisible: false,
            headerTitle: 'Jogadores',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 25,
              fontWeight: '800',
              textShadowColor: 'black',
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 8,
            },
            headerBackImage: () => (
              <TouchableOpacity style={{ marginLeft: 15 }}>
                <Ionicons name="md-close" size={32} color="black" />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity
                style={{ marginRight: 20 }}
                onPress={() =>
                  navigation.navigate('PlayerLibrary', { canAdd: false })
                }
              >
                <Ionicons name="md-people" size={32} color="white" />
              </TouchableOpacity>
            ),
          })}
        />
        <AppStack.Screen
          name="AddNewPlayer"
          component={AddNewPlayer}
          options={{
            headerBackTitleVisible: false,
            headerTitle: '',
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
          }}
        />
        <AppStack.Screen
          name="PlayerLibrary"
          component={PlayerLibrary}
          options={{
            headerBackTitleVisible: false,
            headerTitle: 'Biblioteca de jogadores',
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
            headerTitleStyle: {
              color: '#fff',
              fontSize: 20,
              fontWeight: '800',
              textShadowColor: 'black',
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 8,
            },
          }}
        />
        <AppStack.Screen
          name="ChoosePapers"
          component={ChoosePapers}
          options={({ navigation }) => ({
            headerBackTitleVisible: false,
            headerTitle: 'Papeis',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 25,
              fontWeight: '800',
              textShadowColor: 'black',
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 8,
            },
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
          })}
        />
        <AppStack.Screen
          name="GameDetails"
          component={GameDetails}
          options={({ navigation }) => ({
            headerBackTitleVisible: false,
            headerTitle: 'Jogabilidade',
            headerTitleStyle: {
              color: '#fff',
              fontSize: 25,
              fontWeight: '800',
              textShadowColor: 'black',
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 8,
            },
            headerLeftContainerStyle: {
              marginLeft: 15,
            },
          })}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
