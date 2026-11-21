import React from 'react';
import {StyleSheet, Text, View, SectionList, Image, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

// pokemon data
const datasource = [
  {
    title: 'GRASS',
    bgcolor: '#78C850',
    icon: 'leaf',
    data: [
      {
        key: '1',
        name: 'Bulbasaur',
        picture: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_46.png'
      },
      {
        key: '2',
        name: 'Treecko',
        picture: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/MEP/MEP_EN_55.png'
      }
    ]
  },
  {
    title: 'LIGHTNING',
    bgcolor: '#F8D030',
    icon: 'bolt',
    data: [
      {
        key: '3',
        name: 'Pikachu',
        picture: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_27.png'
      },
      {
        key: '4',
        name: 'Toxel',
        picture: 'https://assets.pokemon.com/static-assets/content-assets/cms2/img/cards/web/SVP/SVP_EN_119.png'
      }
    ]
  }
];

// to display my Pokemon
const renderItem = ({item}) => {
  return (
    <TouchableOpacity
      style={styles.pokemonBox}
      onPress={() => Alert.alert('Pokemon', item.name)}
    >
      <Text style={styles.pokemonName}>
        {item.name}
      </Text>

      <Image
        source={{uri: item.picture}}
        style={styles.pokemonImage}
      />
    </TouchableOpacity>
  );
};

// for displaying section headers

const sectionHeader = ({section: {title, bgcolor, icon}}) => {
  return (
    <View style={[styles.headerBox, {backgroundColor: bgcolor}]}>

      <FontAwesome6
        name={icon}
        size={20}
        color="black"
      />

      <Text style={styles.headerText}>
        {title}
      </Text>

    </View>
  );
};


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => Alert.alert(
            'Add Pokemon',
            'havent implement yet'
          )}
        >
          <Text style={styles.buttonText}>
            ADD POKEMON
          </Text>
        </TouchableOpacity>
      </View>

      <SectionList
        sections={datasource}
        renderItem={renderItem}
        renderSectionHeader={sectionHeader}
        contentContainerStyle={{margin: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  buttonContainer: {
    backgroundColor: 'white',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',
  },

  addButton: {
    backgroundColor: '#2196F3',
    width: '85%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
  },

headerText: {
  fontSize: 15,
  fontFamily: 'sans-serif',
  fontWeight: 'bold',
  textAlign: 'center',
  marginLeft: 10,
},


  pokemonBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8E8F8',
    borderWidth: 1,
    borderColor: 'gray',
    height: 250,
  },

  pokemonName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  pokemonImage: {
    width: 170,
    height: 230,
    resizeMode: 'contain',
  },
});
