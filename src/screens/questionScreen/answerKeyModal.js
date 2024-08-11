import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import DersIcon from '../../assets/DersIcon.png';
import { HEIGHT, IS_IOS } from '../../constants';

const options = ['A', 'B', 'C', 'D', 'E'];

const AnswerKeyModal = ({ questions, insets }) => {
  const refRBSheet = useRef();

  return (
    <View>
      <TouchableOpacity
        style={[styles.button]}
        onPress={() => refRBSheet.current.open()}
      >
        <Text style={styles.textStyle}>Cevap Anahtarı</Text>
      </TouchableOpacity>
      <RBSheet
        ref={refRBSheet}
        useNativeDriver={false}
        customStyles={{
          wrapper: styles.rbSheetWrapper,
          draggableIcon: styles.rbSheetDraggableIcon,
          container: styles.rbSheetContainer
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true
        }}
        customAvoidingViewProps={{
          enabled: true
        }}
        draggable
        height={HEIGHT - insets.top - (IS_IOS ? 0 : 20)}
      >
        <View style={styles.titleContainer}>
          <Image source={DersIcon} />
          <View style={styles.titleTextContainer}>
            <Text style={styles.title}>Temel Kavramlar</Text>
            <Text style={styles.questionLengthText}>
              {questions.length} soru
            </Text>
          </View>
        </View>

        <FlatList
          data={questions}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatlistStyle}
          indicatorStyle='white'
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.questionNumber}>{index + 1}. Soru</Text>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {options.map((option, i) => (
                  <View
                    key={i}
                    style={[
                      styles.optionContainer,
                      item?.userAnswer?.slice(0, 1) === option &&
                        styles.selectOptionContainer,
                    ]}>
                    <Text
                      style={[
                        styles.optionText,
                        item?.userAnswer?.slice(0, 1) === option &&
                          styles.selectOptionText,
                      ]}>
                      {option}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          )}
        />
      </RBSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  rbSheetWrapper: {
    backgroundColor: 'transparent'
  },
  rbSheetDraggableIcon: {
    backgroundColor: '#DCF5FF',
    width: 50,
    height: 4
  },
  rbSheetContainer: {
    backgroundColor: '#305B83',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 20
  },
  titleTextContainer: {
    marginLeft: 12
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#DCF5FF',
    marginBottom: 6
  },
  questionLengthText: {
    fontSize: 12,
    color: '#97BDE0'
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 21,
    color: '#DCF5FF'
  },
  button: {
    padding: 18,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#305B83'
  },
  flatlistStyle: {
    marginLeft: 15,
    marginRight: 35,
    marginTop: 17
  },
  itemContainer: {
    flexDirection: 'row',
    backgroundColor: '#285178',
    paddingLeft: 15,
    paddingRight: 10,
    paddingVertical: 10,
    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    marginTop: 3
  },
  optionContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#97BDE0',
    marginLeft: 10
  },
  selectOptionContainer: {
    backgroundColor: '#359ECE',
    borderColor: '#359ECE'
  },
  optionText: {
    fontSize: 16,
    color: '#97BDE0',
    fontWeight: '700'
  },
  selectOptionText: {
    color: '#fff'
  },
  questionNumber: {
    fontSize: 14,
    color: '#97BDE0',
    fontWeight: '600'
  }
});

export default AnswerKeyModal;
