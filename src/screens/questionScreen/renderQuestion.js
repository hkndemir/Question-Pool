import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {WIDTH} from '../../constants';
import {Brush, ZoomIn, ZoomOut, CheckCircle, NullCircle} from '../../icons';
import {updateAnswer} from '../../redux/slices/app';

const RenderQuestion = ({question, index, nextQuestion}) => {
  const dispatch = useDispatch();
  const renderOption = ({item}) => (
    <TouchableOpacity
      onPress={() =>
        dispatch(
          updateAnswer({
            questionId: index + 1,
            selectedAnswer: item,
          }),
        )
      }
      style={styles.optionContainer}>
      {question?.userAnswer === item ? <CheckCircle /> : <NullCircle />}

      <Text style={styles.optionText}>{item}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.questionNumber}>Soru: {question.id}</Text>
        <View style={styles.iconButtonContainer}>
          <TouchableOpacity style={styles.iconButton}>
            <Brush />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <ZoomIn />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <ZoomOut />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.questionSection}>
        <Text style={styles.questionText}>{question.question}</Text>
      </View>
      <FlatList
        data={question.options}
        renderItem={renderOption}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.optionsList}
      />
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.prevButton}>
          <Text style={styles.prevButtonText}>Önceki Soru</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => nextQuestion(index + 1)}
          style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Testi Bitir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A3855',
    width: WIDTH,
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  iconButton: {
    backgroundColor: '#346796',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5,
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
    backgroundColor: '#284F74',
    color: '#97BDE0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: 5,
  },
  questionText: {
    fontSize: 16,
    color: '#DCF5FF',
  },
  optionsList: {
    marginVertical: 20,
  },
  optionContainer: {
    backgroundColor: '#346796',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#1f497d',
    borderWidth: 1,
    flexDirection: 'row',
  },
  optionText: {
    fontSize: 16,
    color: '#BCDCFA',
    marginLeft: 15,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgba(26, 56, 85, 0.70)',
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

export default RenderQuestion;
