import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabStack from "./tab/TabStack";

const Root = createStackNavigator();

const RootStack = ({ onLayoutRootView }) => {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen
        style={{ zIndex: 999 }}
        name="Tab"
        component={TabStack}
        initialParams={{ onLayoutRootView }}
      />
    </Root.Navigator>
  );
};

export default RootStack;
