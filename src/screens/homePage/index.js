import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import DopingLogo from '../../assets/dopingLogo.jpg';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={DopingLogo} style={styles.image} />

      <Text style={styles.title}>
        Doping Hafıza Soru Dünyasına Hoş Geldiniz
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('QuestionScreen')}
      >
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
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    padding: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#1A3855'
  },
  buttonText: {
    fontSize: 20,
    padding: 20,
    color: 'DCF5FF',
    fontWeight: '700',
    color: '#DCF5FF'
  },
  image: {
    width: 200,
    height: 200
  }
});
