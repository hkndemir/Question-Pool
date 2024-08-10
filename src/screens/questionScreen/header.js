import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  View,
  TouchableOpacity,
  Button,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {WIDTH} from '../../constants';
import RenderQuestion from './renderQuestion';
import {GoBack, OptionIcon} from '../../icons';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(0);
  const questions = useSelector(state => state?.app?.questions);

  useEffect(() => {
    let interval = null;

    interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <View style={styles.container}>
      <View style={styles.upContainer}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.button}>
          <GoBack />
        </TouchableOpacity>
        <Text style={styles.timer}>
          {Math.floor(seconds / 3600)
            .toString()
            .padStart(2, '0')}
          :
          {Math.floor((seconds % 3600) / 60)
            .toString()
            .padStart(2, '0')}
          :{(seconds % 60).toString().padStart(2, '0')}sn
        </Text>
        <TouchableOpacity style={styles.button}>
          <OptionIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowColor: '#DCF5FF',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.04,
    shadowRadius: 50,
    elevation: 12,
    backgroundColor: '#305B83',
    paddingHorizontal: 10,
    paddingVertical: 13,
  },
  upContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#3e678d',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8,
    borderRadius: 10,
  },
  timer: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
});

export default Header;
