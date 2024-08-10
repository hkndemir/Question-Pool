import React, {useRef} from 'react';
import {FlatList, StyleSheet, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {WIDTH} from '../../constants';
import RenderQuestion from './renderQuestion';
import Header from './header';
import {useNavigation} from '@react-navigation/native';

const QuestionScreen = () => {
  const questions = useSelector(state => state?.app?.questions);
  const flatListRef = useRef(null);
  console.log(questions);
  const navigation = useNavigation();
  const nextQuestion = index => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: index,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <FlatList
        ref={flatListRef}
        data={questions}
        horizontal
        pagingEnabled
        renderItem={({item, index}) => (
          <RenderQuestion
            question={item}
            index={index}
            nextQuestion={nextQuestion}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});

export default QuestionScreen;
