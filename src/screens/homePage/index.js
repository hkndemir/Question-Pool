import React  from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text

} from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
<Text style={styles.title}>Doping Hafıza Soru Dünyasına Hoş Geldiniz</Text>

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
});
