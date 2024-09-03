import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [listPokemons, setListPokemons] = useState([] as Pokemon[]);

  useEffect(() => {
    callAPi();
  }, []);

  useEffect(() => {
    console.log({ listPokemons });
  }, [listPokemons]);

  const callAPi = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
      const data = await response.json();
      setListPokemons(data.results);
      console.log({
        response,
        data
      });
    } catch (error) {
      console.log('hay un error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      {listPokemons.map((pokemon, index) => (
        <View key={index} style={styles.pokemonContainer}>
          <Text style={styles.text}>{pokemon.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    gap: 10,
  },
  pokemonContainer: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
