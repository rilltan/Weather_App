import React, { useLayoutEffect } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import HomeScreen from "./HomeScreen";
import RainStatsScreen from "./RainStatsScreen";
import { useDispatch } from "react-redux";

const Home = createStackNavigator();

const HomeStack = ({ route, navigation }) => {
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
    <Home.Navigator screenOptions={{ headerShown: false }}>
      {/* These are for the standard screens */}
      <Home.Group>
        <Home.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ onLayoutRootView: route.params.onLayoutRootView }}
        />
      </Home.Group>

      {/* These are for the modals within the Home Screen */}
      <Home.Group
        screenOptions={{
          presentation: "modal",
          gestureResponseDistance: 1000, // default is 135
          cardStyle: {
            backgroundColor: "transparent",
            opacity: 0.99,
          },
        }}
      >
        <Home.Screen name="Rain Stats" component={RainStatsScreen} />
      </Home.Group>
    </Home.Navigator>
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

export default HomeStack;
