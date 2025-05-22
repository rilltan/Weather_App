import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import { useDispatch } from "react-redux";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Profile = createStackNavigator();

/**
 * ProfileStack is a React component that manages the navigation stack for the user's profile section.
 * It conditionally dispatches actions to enable or disable the bottom tab bar based on the currently focused route.
 *
 * @param {object} props - The component props.
 * @param {object} props.route - The current navigation route object.
 * @param {object} props.navigation - The navigation object for controlling navigation actions.
 * @returns {JSX.Element} The profile stack navigator component.
 */
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
