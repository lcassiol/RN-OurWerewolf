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

export const Paper = styled.View`
  align-items: center;
  border-width: 1px;
  border-color: #999;

  width: 155px;
  height: 200px;
  margin: 10px;
`;

export const PaperImage = styled.Image`
  margin-top: 8px;
  width: 100px;
  height: 100px;
`;

export const PaperName = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 8px;
`;
