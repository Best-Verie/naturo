import { createStackNavigator } from "react-navigation/stack";
import LoginScreen from "./screens/login";
import SignUpScreen from "./screens/signUp";
import {createBottomTabNavigator} from "react-navigation/bottom-tabs";
import HomeScreen from "./screens/home";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="signUp" component={SignUpScreen} />

    </Stack.Navigator>
  );
}


const Tabs = createBottomTabNavigator();

function TabsNavigator(){
    return(
        <Tabs.Navigator
        initialRouteName="home"
        screenOptions={{
            tabBarHideOnKeyBoard: true,
            headerShown: false,
            tabBarInactiveTintColor: 'transparent',
            tabBarStyle: {
                backgroundColor: "white",
                height: 80,
                paddingBottom: 10,
                padding: 30,
                borderTopLeftRadius: 30,
                borderTopRightRadius: 30,
                marginHorizontal: 5,
                position: "absolute",

                borderColor: "white",
                elevation: 10,
            },

            tabBarButton: (props) => {
                return (
                    <View {...props}>
                        <View
                            style={{
                                minWidth: 50,
                                minHeight: 50,
                                borderRadius: 10,
                                backgroundColor: props.accessibilityState
                                    .selected
                                    ? "#F6E3DB"
                                    : "white",
                            }}
                        >
                            <TouchableOpacity {...props} />
                        </View>
                    </View>
                );
            },
            tabBarShowLabel: false,
            tabBarActiveTintColor: "#F7941D",

        }}
        >
            <Tabs.Screen name="home" component={HomeScreen}/>
        </Tabs.Navigator>
    )
}
