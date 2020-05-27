import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  padding: 20px;
  margin-top: 80px;
`;

export const BackgroundImage = styled.Image.attrs()`
  flex: 1;
  position: absolute;
  height: 900px;
`;

export const Button = styled(RectButton)`
  background: #174c66;
  padding: 15px;
  margin-bottom: 35px;
  border-radius: 5px;
  align-self: center;
`;

export const TextButton = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  text-transform: uppercase;
`;
