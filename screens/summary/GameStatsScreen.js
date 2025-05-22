import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { Avatar, Box, Center } from "native-base";
import { t } from "react-native-tailwindcss";
import { COLORS, icons } from "../../constants";
import BackButton from "./components/BackButton";
import Spacer from "./components/Spacer";
import RatingChart from "./components/RatingChart";
import TimeChart from "./components/TimeChart";

function GameStatsScreen({ route, navigation }) {
  const { name } = route.params;

  const getInitials = (name) => {
    let n = name.split(" ");
    let i = n.map((w) => w[0]);
    return i.join("").toUpperCase();
  };

  return (
    <SafeAreaView
      style={[
        {
          flex: 1,
          flexDirection: "column",
          justifyContent: "flex-end",
        },
      ]}
    >
      {/* This is the container for the modal */}
      <View style={[styles.modalContainer, t.hFull]}>
        {/* This is the top action menu of the modal screen */}
        <View
          style={[
            t.flex,
            t.flexRow,
            t.justifyBetween,
            t.mT8,
            t.mL6,
            t.z10,
            { alignItems: "center" },
          ]}
        >
          <BackButton onPress={() => navigation.goBack()} />
          <Text style={[t.textGray800, styles.header]}>{name}</Text>
          <Spacer />
        </View>

        {/* This is the information for the kid name, age and rating */}
        <View style={[t.flex, t.flexRow, t.justifyBetween, t.mT6]}>
          <View style={[t.flex, t.flexRow]}>
            <Center>
              <Avatar
                size={50}
                style={[t.mL6]}
                source={{
                  uri: "https://img.freepik.com/premium-photo/little-blonde-girl-straw-hat-near-flowering-tree_106368-732.jpg?w=2000",
                }}
                backgroundColor={COLORS.secondary}
              >
                {getInitials("Samantha Wheeler")}
              </Avatar>
            </Center>
            <View style={[t.mL2, styles.kidTextContainer]}>
              <Text style={styles.nameText}>Samantha</Text>
              <Text style={styles.ageText}>10 years old</Text>
            </View>
          </View>

          {/* This is the component for the Badge */}
          <View style={[badges.badge, t.bgGreen300]}>
            <Text style={[badges.ratingText]}>Rating</Text>
            <Text style={[badges.text]}>1570</Text>
          </View>
        </View>

        {/* This is the information about the number of games played and time spent on the application */}
        <View
          style={[
            t.flex,
            t.flexRow,
            {
              marginHorizontal: 24,
              marginTop: 40,
              justifyContent: "space-around",
            },
          ]}
        >
          <Box
            style={[styles.gamesPlayedCard]}
            // bg={{
            //   linearGradient: {
            //     // colors: [COLORS.lightGrayGradientLeft, COLORS.lightGrayGradientRight],
            //     colors: [COLORS.white, COLORS.lightred],
            //     start: [0, 1],
            //     end: [1, 0],
            //   },
            // }}
            bg={COLORS.white}
            shadow="2"
          >
            <Image
              source={icons.puzzlesIcon}
              resizeMode="contain"
              style={{
                alignSelf: "center",
                width: 50,
                height: 50,
              }}
            />
            <Text style={styles.numberGamesText}>578</Text>
            <Text style={styles.gamesText}>Games</Text>
          </Box>

          {/* This is the time chart */}
          <TimeChart />
        </View>

        <RatingChart />

        {/* <ScrollView style={[t.hFull]} showsVerticalScrollIndicator={false}>
                    
                </ScrollView> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    position: "absolute",
    width: "100%",
    backgroundColor: COLORS.lightGray2,
    borderRadius: 25,
    paddingBottom: 150,
  },
  header: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
  nameText: {
    top: 15,
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  },
  ageText: {
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
    marginTop: 17,
    color: "#888899",
    marginLeft: 3,
    bottom: 5,
  },
  text: {
    color: "#9999AA",
    fontFamily: "Poppins-Normal",
  },
  kidTextContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    gap: 0,
    alignSelf: "center",
  },
  gamesPlayedCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    // borderColor: COLORS.darkgray,
    // backgroundColor: COLORS.lightGray,
  },
  numberGamesText: {
    marginTop: 5,
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    fontWeight: 400,
  },
  gamesText: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
    fontWeight: 400,
  },
  numberTimeText: {
    marginTop: 5,
    fontFamily: "Poppins-Bold",
    fontSize: 36,
    fontWeight: 400,
  },
  timeText: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    fontWeight: 400,
  },
  shadow: {
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
  },
});

const badges = StyleSheet.create({
  badge: {
    flex: "auto",
    fontFamily: "Poppins-Bold",
    paddingHorizontal: 20,
    paddingVertical: 2,
    borderRadius: 8,
    marginRight: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.black,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "500",
    color: COLORS.black,
    textAlign: "center",
  },
});
export default GameStatsScreen;
