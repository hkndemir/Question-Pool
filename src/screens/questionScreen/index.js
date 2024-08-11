import React, { useRef, useEffect } from 'react';
import { FlatList, StyleSheet, StatusBar, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import RenderQuestion from './renderQuestion';
import Header from './header';
import { reset } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';

const QuestionScreen = () => {
  const questions = useSelector(state => state?.app?.questions);
  const flatListRef = useRef(null);
  const insets = useSafeAreaInsets();
  const dispatch = useDispatch();

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
      <Header questions={questions} insets={insets} />
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
