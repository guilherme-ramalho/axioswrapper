import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native';
import request from './services/api';

import {
  Container,
  SearchInput,
  SearchButton,
  Row,
  ButtonText,
  LoaderContainer,
} from './styles';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const callApi = () => {
    if (pokemonName) {
      request({
        endpoint: `pokemon/${pokemonName}/`,
        callbackFunction: response => {
          console.log(response);
        },
        loaderSetterFunction: setIsLoading,
      });
    } else {
      alert('You gotta catch somethin other than blank');
    }
  };

  return (
    <Container>
      {isLoading ? (
        <LoaderContainer>
          <ActivityIndicator size="large" color="#304572" />
        </LoaderContainer>
      ) : (
        <Row>
          <SearchInput
            value={pokemonName}
            onChangeText={text => setPokemonName(text)}
          />
          <SearchButton onPress={() => callApi()}>
            <ButtonText>Check Pokémon</ButtonText>
          </SearchButton>
        </Row>
      )}
    </Container>
  );
}

export default App;
