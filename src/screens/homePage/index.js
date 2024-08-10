import React from 'react';
import {StyleSheet, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Doping Hafıza Soru Dünyasına Hoş Geldiniz
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QuestionScreen')}>
        <Text style={styles.buttonText}>Teste Başla</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    padding: 20,
  },
  button: {
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'white',
  },
});
