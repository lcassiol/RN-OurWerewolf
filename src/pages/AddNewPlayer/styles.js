import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  margin-top: 40px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.5);
`;

export const ButtonCamera = styled.TouchableOpacity`
  flex-direction: column;
  align-items: center;
`;

export const PlayerImage = styled.Image`
  margin-top: -20px;
  width: 250px;
  height: 250px;
`;

export const PlayerName = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  margin-top: 25px;
  border-radius: 5px;
  background: #fff;
  color: #000;
  font-size: 20px;
  height: 45px;
  padding: 0 10px;

  shadow-color: #000;
  shadow-offset: 0 5px;
  shadow-opacity: 0.34;
  shadow-radius: 6.27px;
  elevation: 10;
`;

export const ButtonSave = styled.TouchableOpacity`
  margin-top: 20px;
  background: #174c66;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  margin-right: 10px;
  font-size: 20px;
  font-weight: bold;
`;
