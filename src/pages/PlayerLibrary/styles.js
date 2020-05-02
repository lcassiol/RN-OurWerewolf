import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 100px;
  background: rgba(255, 255, 255, 0.5);
`;

export const Content = styled.View`
  align-items: flex-start;
  margin-left: 10px;
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
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  right: 20px;
  bottom: 50px;
`;
