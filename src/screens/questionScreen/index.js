import React, { useRef, useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RenderQuestion from './renderQuestion';
import Header from './header';
import { reset } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { LeftArrow } from '../../icons';
import { useNavigation } from '@react-navigation/native';
import { IS_IOS } from '../../constants';

const QuestionScreen = () => {
  const navigation = useNavigation();
  const questions = useSelector(state => state?.app?.questions);
  const flatListRef = useRef(null);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    return () => {
      dispatch(reset());
    };
  }, []);

  const scrollToQuestion = index => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: index
    });
  };

  useEffect(() => {
    scrollToQuestion(currentIndex);
  }, [currentIndex]);

  return (
    <View
      style={[
        styles.container,
        //Inline style was given because hook was used in the style.
        {
          paddingTop: insets.top
        }
      ]}
    >
      <StatusBar barStyle='light-content' backgroundColor='#305B83' />
      <Header
        questions={questions}
        insets={insets}
        currentIndex={currentIndex}
      />
      <FlatList
        ref={flatListRef}
        data={questions}
        horizontal
        pagingEnabled
        renderItem={({ item, index }) => (
          <RenderQuestion
            question={item}
            index={index}
            scrollToQuestion={scrollToQuestion}
            questions={questions}
          />
        )}
        onScrollToIndexFailed={() => {}}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
      <View
        style={[
          styles.bottomButtons,
          //Inline style was given because hook was used in the style.
          IS_IOS && {
            paddingBottom: insets.bottom - 10
          }
        ]}
      >
        <TouchableOpacity
          onPress={() => {
            if (currentIndex > 0) {
              setCurrentIndex(prev => prev - 1);
            }
          }}
        >
          <LinearGradient
            colors={['#03A9F1', '#1A85B4']}
            style={styles.prevAndNextButtonLinear}
          >
            <LeftArrow />
            <Text style={styles.prevAndNextButtonText}>Önceki Soru</Text>
          </LinearGradient>
        </TouchableOpacity>
        {currentIndex + 1 === questions?.length ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ExamResultScreen', { questions })
            }
          >
            <LinearGradient
              colors={['#1ABC9C', '#16A085']}
              style={styles.prevAndNextButtonLinear}
            >
              <Text style={styles.submitButtonText}>Testi Bitir</Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setCurrentIndex(prev => prev + 1)}>
            <LinearGradient
              colors={['#03A9F1', '#1A85B4']}
              style={styles.prevAndNextButtonLinear}
            >
              <Text style={styles.prevAndNextButtonText}>Sonraki Soru</Text>
              <View style={styles.leftArrowReverse}>
                <LeftArrow />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#305B83'
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1A3855',
    padding: 10
  },
  prevAndNextButtonLinear: {
    padding: 15,
    borderRadius: 10,
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
  submitButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '700',
    paddingHorizontal: 20
  }
});

export default QuestionScreen;
