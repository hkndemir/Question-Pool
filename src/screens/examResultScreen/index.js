import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import calculateResults from '../../utils/calculateResults';
import { useNavigation } from '@react-navigation/native';
import { reset } from '../../redux/slices/app';
import Dopi from '../../assets/Dopi.png';
import Net from '../../assets/Net.png';
import Correct from '../../assets/correct.png';
import Incorrect from '../../assets/incorrect.png';
import Null from '../../assets/null.png';
import { LinearGradient } from 'expo-linear-gradient';

const ExamResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { correct, incorrect, empty, net } = calculateResults(
    route.params.questions
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Seviye Belirleme Sınav Sonucu</Text>
      <Image source={Dopi} style={styles.image} />
      <Text style={styles.congratulations}>
        Tebrikler, sınavı başarıyla tamamladın!
      </Text>
      <Text style={styles.level}>
        Dopi Yapay Zeka seviyeni{' '}
        <Text style={styles.levelBold}>"Temel Seviye"</Text> olarak
        belirlemiştir. Seviyeni istediğin zaman ünite içerisinden
        değiştirebilirsin.
      </Text>

      <View style={styles.resultContainer}>
        <View style={styles.result}>
          <Image source={Net} style={styles.image} />
          <Text style={styles.resultText}>{net} Net</Text>
        </View>
        <View style={styles.result}>
          <Image source={Correct} style={styles.image} />
          <Text style={styles.resultText}>{correct} Doğru</Text>
        </View>
        <View style={styles.result}>
          <Image source={Incorrect} style={styles.image} />
          <Text style={styles.resultText}>{incorrect} Yanlış</Text>
        </View>
        <View style={styles.result}>
          <Image source={Null} style={styles.image} />
          <Text style={styles.resultText}>{empty} Boş</Text>
        </View>
      </View>

      <LinearGradient
        colors={['#03A9F1', '#1A85B4']}
        style={styles.bottomButton}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }]
            });
            dispatch(reset());
          }}
        >
          <Text style={styles.bottomButtonText}>Üniteye Başla</Text>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#325B86',
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 30
  },
  image: {
    width: 65,
    height: 65,
    marginBottom: 20,
    marginTop: 40
  },
  congratulations: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 10,
    fontWeight: '700',
    marginTop: 20
  },
  level: {
    fontSize: 16,
    color: '#DCF5FF',
    marginBottom: 50,
    textAlign: 'center',
    paddingHorizontal: 20,
    lineHeight: 22
  },
  levelBold: {
    color: '#FFCC00',
    fontWeight: '600'
  },
  resultContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20
  },
  result: {
    alignItems: 'center'
  },
  resultText: {
    fontSize: 18,
    color: '#FFFFFF'
  },
  bottomButton: {
    position: 'absolute',
    bottom: 40,
    width: '95%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottomButtonText: {
    fontWeight: '700',
    paddingVertical: 17,
    fontSize: 16,
    color: '#F8FAFC'
  }
});

export default ExamResultScreen;
