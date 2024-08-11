import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import { OptionIcon } from '../../icons';
import { WIDTH } from '../../constants';
import AnswerKeyModal from './answerKeyModal';

const OptionsModal = ({ navigation, questions, insets }) => {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(questions);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.buttonOption}
      >
        <OptionIcon />
      </TouchableOpacity>
      <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.upButtonsContainer}>
              <AnswerKeyModal questions={questions} setModalVisible={setModalVisible} insets={insets} />
              <TouchableOpacity
                style={[styles.button, styles.borderUpWidth]}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  navigation.navigate('ExamResultScreen', { questions });
                }}
              >
                <Text style={[styles.textStyle, styles.selectionColor]}>
                  Testi Bitir
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.buttonCancel]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={[styles.textStyle, styles.boldText]}>Vazgeç</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  modalView: {
    borderRadius: 20,
    paddingBottom: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: WIDTH - 20
  },
  upButtonsContainer: {
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden'
  },
  button: {
    padding: 18,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#305B83'
  },
  borderUpWidth: {
    borderTopWidth: 1,
    borderTopColor: '#43709a'
  },

  buttonCancel: {
    borderRadius: 10,
    padding: 18,
    elevation: 2,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#305B83',
    marginTop: 10
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 21,
    color: '#DCF5FF'
  },
  selectionColor: {
    color: '#F97277'
  },
  boldText: {
    fontWeight: '700'
  },
  buttonOption: {
    backgroundColor: '#3e678d',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 10
  }
});

export default OptionsModal;
