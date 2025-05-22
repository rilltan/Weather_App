import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "./SummaryScreen";
import GameStatsScreen from "./GameStatsScreen";
import { useDispatch } from "react-redux";

const Summary = createStackNavigator();

const SummaryStack = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Game Stats") {
      dispatch({ type: "disableBottomTabs" });
    } else {
      dispatch({ type: "enableBottomTabs" });
    }
  }, [route, navigation]);

  return (
    <Summary.Navigator screenOptions={{ headerShown: false }}>
      {/* These are for the standard screens */}
      <Summary.Group>
        <Summary.Screen
          name="Summary"
          component={HomeScreen}
          initialParams={{ onLayoutRootView: route.params.onLayoutRootView }}
        />
      </Summary.Group>

      {/* These are for the modals within the Home Screen */}
      <Summary.Group
        screenOptions={{
          presentation: "modal",
          gestureResponseDistance: 1000, // default is 135
          cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
          },
        }}
      >
        <Summary.Screen name="Game Stats" component={GameStatsScreen} />
      </Summary.Group>
    </Summary.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});

export default SummaryStack;
