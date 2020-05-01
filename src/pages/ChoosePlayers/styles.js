import styled from "styled-components/native";
import { FlatList } from "react-native";

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 100px;
`;

export const AddPlayer = styled.TouchableOpacity`
  background: #174c66;
  height: 60px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #fff;

  margin-right: 15px;
`;

export const Content = styled.View`
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  flex: 1;
`;

export const PlayersList = styled(FlatList).attrs({})``;

export const Player = styled.View`
  align-items: center;
  margin: 8px 12px;
`;

export const PlayerImage = styled.Image`
  width: 85px;
  height: 85px;
`;

export const PlayerName = styled.Text`
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  background: #174c66;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  height: 65px;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;
