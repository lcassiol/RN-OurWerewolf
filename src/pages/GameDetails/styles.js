import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin-top: 100px;
  background: rgba(255, 255, 255, 0.5);
`;

export const Random = styled.View`
  background: #174c66;
  height: 60px;
  justify-content: space-between;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  font-size: 18px;
  color: #fff;
  margin-right: 15px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 10px;
`;

export const Category = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #000;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const Description = styled.Text`
  font-size: 12px;
  color: #000;
  text-transform: uppercase;
  padding: 10px 0;
`;

export const Option = styled.Text`
  font-weight: 500;
  font-size: 14px;
  color: #000;
  max-width: 300px;
  padding: 10px 0;
`;

export const NextButton = styled.TouchableOpacity`
  background: #174c66;
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
