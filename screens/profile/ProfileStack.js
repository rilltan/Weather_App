import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import { useDispatch } from "react-redux";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Profile = createStackNavigator();

const ProfileStack = ({ route, navigation }) => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Settings") {
      dispatch({ type: "disableBottomTabs" });
    } else {
      dispatch({ type: "enableBottomTabs" });
    }
  }, [route, navigation]);

  return (
    <Profile.Navigator screenOptions={{ headerShown: false }}>
      <Profile.Group>
        <Profile.Screen name="Profile" component={ProfileScreen} />
      </Profile.Group>
    </Profile.Navigator>
  );
};

export default ProfileStack;
