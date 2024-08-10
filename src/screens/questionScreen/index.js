import React, { useRef } from 'react';
import { FlatList, StyleSheet, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RenderQuestion from './renderQuestion';
import Header from './header';
import { useNavigation } from '@react-navigation/native';

const QuestionScreen = () => {
  const questions = useSelector(state => state?.app?.questions);
  const flatListRef = useRef(null);
  console.log(questions);
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const scrollToQuestion = index => {
    flatListRef?.current?.scrollToIndex({
      animated: true,
      index: index
    });
  };
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
      <StatusBar barStyle='light-content' />
      <Header />
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#305B83'
  }
});

export default QuestionScreen;
