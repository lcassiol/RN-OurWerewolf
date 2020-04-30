import React from "react";
import { Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const AppStack = createStackNavigator();

import Home from "./pages/Home";
import ChoosePlayers from "./pages/ChoosePlayers";

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
          options={{
            headerBackTitleVisible: false,
            headerTitle: "Jogadores",
            headerTitleStyle: {
              color: "#fff",
              fontSize: 25,
              fontWeight: "800",
              textShadowColor: "black",
              textShadowOffset: { width: -1, height: 0 },
              textShadowRadius: 8,
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="biblioteca"
                color="#00cc00"
              />
            ),
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
