import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #EE5550;
  padding: 10px;
`;

export const LoaderContainer = styled.View`
  flex: 1;
  height: 100%;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#fff',
})`
  background-color: #C74227;
  border-radius: 4px;
  height: 45px;
  text-align: center;
  color: white;
  font-size: 15px;
  flex: 4;
  margin-right: 10px;
`;

export const SearchButton = styled.TouchableOpacity`
  height: 45px;
  background-color: rgb(254,202,27);
  border-radius: 4px;
  flex: 2;
  justify-content: center;
  align-items: center;
  border: 1px solid #304572;
`;

export const ButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
