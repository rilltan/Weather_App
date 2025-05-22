import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Image, Dimensions } from "react-native";

import HomeStack from "../home/HomeStack";
import SummaryStack from "../summary/SummaryStack";
import ProfileStack from "../profile/ProfileStack";



import Tab from "./components/Tab";
import { icons } from "../../constants";
import { shallowEqual, connect, useSelector } from "react-redux";


const BottomTab = createBottomTabNavigator();

const TabStack = ({ route }) => {
  let bottomTabsActive = useSelector(
    (state) => state.bottomTabsActive,
    shallowEqual
  );

  return (
    <>
      <BottomTab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            display: bottomTabsActive ? "flex" : "none",
            position: "absolute",
            bottom: 25,
            left: 0,
            right: 0,
            marginLeft:100,
            // elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 100,
            height: 70,
            zIndex: 909,
            width: Dimensions.get("window").width / 2,
            ...styles.shadow,
          },
        }}
      >
        <BottomTab.Screen
          name="Home"
          component={HomeStack}
          initialParams={{ onLayoutRootView: route.params.onLayoutRootView }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Tab
                focused={focused}
                size={25}
                unfocused_icon={icons.homeIconUnfilled}
                focused_icon={icons.homeIconFilled}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Summary"
          component={SummaryStack}
          initialParams={{ onLayoutRootView: route.params.onLayoutRootView }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Tab
                focused={focused}
                size={20}
                unfocused_icon={icons.summaryIconUnfilled}
                focused_icon={icons.summaryIconUnfilled}
              />
            ),
          }}
        />
         <BottomTab.Screen
          name="Profile"
          component={ProfileStack}
          initialParams={{ onLayoutRootView: route.params.onLayoutRootView }}
          options={{
            tabBarIcon: ({ focused }) => (
              <Tab
                focused={focused}
                size={20}
                unfocused_icon={icons.profileIconUnfilled}
                focused_icon={icons.profileIconFilled}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabIcon: {
    display: "flex",
    justifyContent: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "center",
    height: 200,
    width: Dimensions.get("window").width,
  },
});

const mapStateToProps = (state) => {
  let { bottomTabActive } = state;
  return {
    bottomTabActive,
  };
};

export default connect(mapStateToProps)(TabStack);
