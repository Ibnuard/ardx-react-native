import * as React from 'react'
import { View, Text, Button } from 'react-native'

const LoginScreen = ({ navigation }) => {
    return (
        <View>
            <Text>LoginScreen</Text>
            <Button title='go to main' onPress={() => navigation.navigate('Main')} />
        </View>
    )
}

export default LoginScreen