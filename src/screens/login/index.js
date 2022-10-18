import * as React from 'react';
import {View, Text} from 'react-native';
import {Button} from '../../components';
import {cLog} from '../../utils/utils';
import styles from './styles';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button
        title="Go to main screen"
        upperCase={false}
        isLoading={false}
        disabled={false}
        onPress={() => navigation.navigate('Main')}
      />
      <Button
        isLoading={false}
        invert
        disabled={false}
        onPress={() => cLog('Holas', 'red')}
      />
    </View>
  );
};

export default LoginScreen;
