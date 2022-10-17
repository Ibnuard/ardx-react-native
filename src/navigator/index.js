import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import LoginScreen from '../screens/login';


//create stack screen
const Stack = createNativeStackNavigator();

//create bottom tab
const Tab = createBottomTabNavigator();



//===================================
// ========== GAP ===================
// ==================================


//main stack screen
export const MainStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Auth" component={LoginScreen} />
            <Stack.Screen name="Main" component={MainTabScreen} />
        </Stack.Navigator>
    )
}


//tab stack screen
export const MainTabScreen = () => {
    return (
        <Tab.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    )
}