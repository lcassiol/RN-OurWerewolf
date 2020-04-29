import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 20px;
  color: #009999;
`;

export const Button = styled.TouchableOpacity`
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
