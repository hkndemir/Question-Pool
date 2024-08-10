import React from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';

const questionData = {
  questionNumber: 5,
  questionText: `“Şair, şiirlerinde hava alacak boşluk bırakmıyor, her şeyi söylüyor. Okuyucunun adına da kendisi konuşuyor. Bunun için dizleri hayalinizin perdeliyor, soluğunuzu kesiyor, sizi boğuyor.”
Bu parçada geçen “hava alacak boşluk bırakmamak” sözüyle anlatılmak istenen aşağıdakilerden hangisidir?`,
  options: [
    'A) Görgüsüzce davranmasaydın, seni böyle dışlamazdık.',
    'B) Ekip arkadaşlarıyla ters düşmeyen uyumlu bir teknisyendi',
    'C) Her şeyin kendisinin olmasını isteyen açgözlü biriydi.',
    'D) Bir dediği bir dediğini tutmayan tutarsız bir gazeteciydi.',
    'E) Ağzında bakla ıslanmayan biriydi.',
  ],
};

const QuestionScreen = () => {
  const renderOption = ({item}) => (
    <TouchableOpacity style={styles.optionContainer}>
      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.examTitle}>
          Temel Kavramlar Seviye Belirleme Sınavı
        </Text>
        <Text style={styles.timer}>02:34:50sn</Text>
      </View>

      <View style={styles.questionSection}>
        <Text style={styles.questionNumber}>
          Soru: {questionData.questionNumber}
        </Text>
        <Text style={styles.questionText}>{questionData.questionText}</Text>
      </View>
      <FlatList
        data={questionData.options}
        renderItem={renderOption}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.optionsList}
      />
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.prevButton}>
          <Text style={styles.prevButtonText}>Önceki Soru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Testi Bitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#1f497d',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  examTitle: {
    color: '#ffffff',
    fontSize: 14,
  },
  timer: {
    color: '#ffffff',
    fontSize: 14,
  },
  questionSection: {
    marginVertical: 20,
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
  },
  questionText: {
    fontSize: 14,
    color: '#333333',
  },
  optionsList: {
    marginVertical: 20,
  },
  optionContainer: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#1f497d',
    borderWidth: 1,
  },
  optionText: {
    fontSize: 14,
    color: '#333333',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  prevButton: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    borderColor: '#1f497d',
    borderWidth: 1,
  },
  prevButtonText: {
    color: '#1f497d',
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#1f497d',
    padding: 15,
    borderRadius: 10,
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
});

export default QuestionScreen;
