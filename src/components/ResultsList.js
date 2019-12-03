import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ResultDetails from '../components/ResultDetails';

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={style.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <ResultDetails result={item} />
          )
        }}
      />
    </View>
  )
};

const style = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold'
  }
});

export default ResultsList;