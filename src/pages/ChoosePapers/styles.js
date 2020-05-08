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

export const Papers = styled.FlatList``;

export const Line = styled.View`
  width: 150px;
  align-self: center;
  border-top-color: #174c66;
  border-top-width: 1.6px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Category = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #174c66;
  text-transform: uppercase;
  text-align: center;
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
