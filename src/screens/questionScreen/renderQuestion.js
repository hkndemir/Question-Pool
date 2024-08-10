import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';
import { useDispatch } from 'react-redux';
import { WIDTH } from '../../constants';
import {
  Brush,
  ZoomIn,
  ZoomOut,
  CheckCircle,
  NullCircle,
  LeftArrow
} from '../../icons';
import { updateAnswer } from '../../redux/slices/app';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const RenderQuestion = ({ question, index, scrollToQuestion, questions }) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const renderOption = ({ item }) => (
    <TouchableOpacity
      onPress={() =>
        dispatch(
          updateAnswer({
            questionId: index + 1,
            selectedAnswer: item
          })
        )
      }
      style={[
        styles.optionContainer,
        question?.userAnswer === item && styles.selectOptionContainer
      ]}
    >
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
      <FlatList
        data={question.options}
        ListHeaderComponent={
          <Text style={styles.questionText}>{question.question}</Text>
        }
        renderItem={renderOption}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.optionsList}
      />
      <View
        style={[
          styles.bottomButtons,
          //Inline style was given because hook was used in the style.
          {
            paddingBottom: insets.bottom - 10
          }
        ]}
      >
        <LinearGradient
          colors={['#03A9F1', '#1A85B4']}
          style={styles.prevAndNextButtonLinear}
        >
          <TouchableOpacity
            onPress={() => {
              if (index > 0) {
                scrollToQuestion(index - 1);
              }
            }}
            style={styles.prevAndNextButton}
          >
            <LeftArrow />
            <Text style={styles.prevAndNextButtonText}>Önceki Soru</Text>
          </TouchableOpacity>
        </LinearGradient>
        {index + 1 === questions?.length ? (
          <LinearGradient
            colors={['#1ABC9C', '#16A085']}
            style={styles.prevAndNextButtonLinear}
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ExamResultScreen', { questions })
              }
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Testi Bitir</Text>
            </TouchableOpacity>
          </LinearGradient>
        ) : (
          <LinearGradient
            colors={['#03A9F1', '#1A85B4']}
            style={styles.prevAndNextButtonLinear}
          >
            <TouchableOpacity
              onPress={() => scrollToQuestion(index + 1)}
              style={styles.prevAndNextButton}
            >
              <Text style={styles.prevAndNextButtonText}>Sonraki Soru</Text>
              <View style={styles.leftArrowReverse}>
                <LeftArrow />
              </View>
            </TouchableOpacity>
          </LinearGradient>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A3855',
    width: WIDTH,
    padding: 10
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  backButton: {
    paddingHorizontal: 10
  },
  backButtonText: {
    color: '#ffffff',
    fontSize: 18
  },
  iconButton: {
    backgroundColor: '#346796',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 5
  },
  examTitle: {
    color: '#ffffff',
    fontSize: 14
  },
  timer: {
    color: '#ffffff',
    fontSize: 14
  },
  questionNumber: {
    fontSize: 16,
    marginBottom: 10,
    backgroundColor: '#284F74',
    color: '#97BDE0',
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignSelf: 'center',
    borderRadius: 5
  },
  questionText: {
    fontSize: 16,
    color: '#DCF5FF',
    paddingBottom: 30
  },
  optionsList: {
    marginVertical: 20
  },
  optionContainer: {
    backgroundColor: '#346796',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    opacity: 0.7
  },
  selectOptionContainer: {
    backgroundColor: '#3C79B0',
    opacity: 1
  },
  optionText: {
    fontSize: 16,
    color: '#BCDCFA',
    marginLeft: 15
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    background: 'rgba(26, 56, 85, 0.70)'
  },
  prevAndNextButtonLinear: {
    padding: 15,
    borderRadius: 10
  },
  prevAndNextButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftArrowReverse: {
    transform: [{ rotate: '180deg' }]
  },
  prevAndNextButtonText: {
    color: '#F8FAFC',
    fontSize: 14,
    fontWeight: '700'
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700'
  }
});

export default RenderQuestion;
