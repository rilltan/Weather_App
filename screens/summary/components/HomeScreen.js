import React from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { View } from "native-base";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";
import FilterButton from "./components/FilterButton";

import { t } from "react-native-tailwindcss";
import { COLORS, icons } from "../../constants";
import { Select } from "native-base";
import Chart from "./components/Chart/Index";

const HomeScreen = ({ navigation }) => {
  const screenTime = [
    { number: 8, name: "Tangram", color: COLORS.blue },
    { number: 7, name: "Numbers", color: COLORS.purple },
    { number: 10, name: "Matching", color: COLORS.primary },
    { number: 23, name: "Battleship", color: COLORS.secondary },
    { number: 37, name: "Unused", color: COLORS.lightGray },
  ];
  const [child, setChild] = React.useState("");

  return (
    <View style={styles.containerHome}>
      {/* This is the top section of the screen for title and action icons */}
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />
        <FilterButton onPress={() => navigation.push("Filters")} />
      </View>

      {/* This is the main portion of the screen */}
      <View style={styles.mainContainer}>
        {/* This is where you are going to select the children */}
        <View style={styles.childSelect}>
          <Select
            selectedValue={child}
            minWidth="200"
            accessibilityLabel="Select Child"
            placeholder="Select Child"
            _selectedItem={{ bg: "teal.600" }}
            mt={1}
            onValueChange={(itemValue) => setChild(itemValue)}
          >
            <Select.Item label="Samantha" value="ux" />
            <Select.Item label="Jane Doe" value="web" />
            <Select.Item label="Johnny Smith" value="cross" />
          </Select>
        </View>

        {/* This is going to be the main 3 sections including streaks */}
        <View style={[styles.verticalContainer]}>
          {/* First Row: Streaks */}

          <TouchableOpacity style={[styles.container]}>
            {/* The Streak text */}
            <View style={[t.justifyCenter, t.m2]}>
              <Text style={[styles.streakNumber]}>11</Text>
              <Text style={[styles.streakSubtext]}>day streak!</Text>
            </View>

            {/* The Streaks Icon Thumbnail */}
            <Image
              source={icons.streaksIcon}
              resizeMode="contain"
              style={{
                margin: 5,
                alignSelf: "center",
                width: 50,
                height: 50,
              }}
            />
          </TouchableOpacity>

          {/* Second Row: Screentime and  Favourite Game */}

          <View style={[styles.container2]}>
            {/* Screentime */}
            <TouchableOpacity style={[styles.subContainer]}>
              {/* The Streak text */}
              <Chart data={screenTime} />
              <View style={[t.justifyCenter, t.m2]}>
                <Text style={[styles.streakNumber]}>15</Text>
                <Text style={[styles.streakSubtext]}>minutes used</Text>
              </View>
            </TouchableOpacity>

            {/* Favourite Game */}
            <TouchableOpacity style={[styles.subContainer]}>
              <View
                style={{
                  height: "80%",
                  display: "flex",
                  justifyContent: "center",
                  alignContent: "center",
                }}
              >
                <View style={styles.favGame}>
                  <Text style={styles.favGameText}>Favourite Game</Text>
                </View>

                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "75%",
                  }}
                >
                  <Image
                    source={require("../../assets/images/games_images/tangram.png")}
                    resizeMode="contain"
                    style={{
                      marginTop: 0,
                      alignSelf: "center",
                      width: 50,
                      height: 50,
                      // shadowOpacity: 0.3,
                      // shadowRadius: 20,
                      // shadowColor: COLORS.black,
                      // shadowOffset: { height: 10, width: 0 }
                    }}
                  />

                  {/* The Name of the game */}
                  <Text style={styles.containerHeader}>Tangram</Text>
                </View>
              </View>

              {/* PLAY BUTTON */}
              <View
                style={[
                  styles.playButton,
                  t.flex,
                  t.justifyCenter,
                  { backgroundColor: "orange" },
                ]}
              >
                <Image
                  source={icons.playIcon}
                  resizeMode="contain"
                  style={{
                    alignSelf: "center",
                    width: 20,
                    height: 20,
                    tintColor: COLORS.white,
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* This is going to be the section for badges and awards */}
        {/* This is going to be the section for badges and awards */}
        <Text style={styles.badgesHeader}>My Badges</Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Array.from(Array(2).keys()).map((e) => (
            <>
              <Image
                source={icons.redBadgeIcon}
                resizeMode="contain"
                style={{
                  alignSelf: "center",
                  width: 90,
                  height: 90,
                }}
              />
              <Image
                source={icons.blueBadgeIcon}
                resizeMode="contain"
                style={{
                  alignSelf: "center",
                  width: 90,
                  height: 90,
                }}
              />
              <Image
                source={icons.greenBadgeIcon}
                resizeMode="contain"
                style={{
                  alignSelf: "center",
                  width: 90,
                  height: 90,
                }}
              />
            </>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // CONTAINER - HOME
  container: {
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderRadius: 8,
    width: Dimensions.get("window").width - 50,
    marginHorizontal: 10,
    marginTop: 30,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  container2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 8,
    width: Dimensions.get("window").width - 50,
    marginHorizontal: 10,
    marginTop: 10,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  badgesHeader: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    marginVertical: 10,
    marginBottom: 25,
    fontWeight: 700,
    alignSelf: "center",
  },
  subContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    width: Dimensions.get("window").width / 2 - 50,
    height: 250,
    margin: 10,
    marginTop: 30,
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 0, width: 0 },
  },
  verticalContainer: {
    display: "flex",
    flexDirection: "column",
  },
  containerHome: {
    marginHorizontal: 10,
    padding: 10,
  },
  mainContainer: {},
  childSelect: {
    marginTop: 15,
  },
  top: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  streakNumber: {
    color: COLORS.black,
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    fontWeight: 700,
    alignSelf: "center",
  },
  streakSubtext: {
    alignSelf: "center",
    fontWeight: 500,
    fontSize: 15,
  },

  containerHeader: {
    color: COLORS.black,
    marginVertical: 10,
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: 700,
    alignSelf: "center",
  },
  playButton: {
    height: "20%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    width: "100%",
  },
  favGame: {
    backgroundColor: COLORS.secondary,

    alignSelf: "center",
    justifyContent: "center",
    height: "25%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    width: "100%",
    position: "static",
    top: 0,
  },
  favGameText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    fontWeight: 700,
    color: COLORS.white,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
