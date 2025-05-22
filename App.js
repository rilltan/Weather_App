import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./screens/RootStack";
import { NativeBaseProvider } from "native-base";

import { connect, Provider, useStore } from "react-redux";
import { store } from "./redux/store";

const LinearGradient = require("expo-linear-gradient").LinearGradient;


const config = {
  dependencies: {
    "linear-gradient": LinearGradient,
  },
};

export default function App() {
  return (
    <NativeBaseProvider config={config}>
      <NavigationContainer>
          <Provider store={store}>
            {/* <Text>hi</Text> */}
            <RootStack />
          </Provider>
        </NavigationContainer>
      </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
