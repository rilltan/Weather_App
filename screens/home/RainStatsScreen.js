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
import { t } from "react-native-tailwindcss";
import { COLORS, icons } from "../../constants";
import RainfallChart from "./components/RainfallChart";

function RainStatsScreen({ route, navigation }) {

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
        <Text style={styles.header}>
                Projected Rainfall
          </Text>
        <RainfallChart />

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
    fontSize: 36,
    fontWeight: 700,
    margin: 15,
    marginTop: 40,
    marginLeft: 30,
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
export default RainStatsScreen;
