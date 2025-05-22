import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { LineChart } from "react-native-chart-kit";

import { COLORS } from "../../../constants";

import { t } from "react-native-tailwindcss";
import { Box } from "native-base";

function RatingChart() {
  return (
    <View style={{ marginTop: 20 }}>
      {/* <Text style={{fontFamily: "Poppins-Bold", textAlign: 'center', marginTop: 20, fontSize: 20}}>Rating</Text> */}

      <LineChart
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
          datasets: [
            {
              data: [1000, 1025, 1024, 1120, 1392, 1493, 1535, 1570],
            },
          ],
        }}
        width={Dimensions.get("window").width - 60}
        height={220}
        yAxisLabel=""
        yAxisSuffix=""
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          // backgroundColor: "#D3CCE3",
          backgroundGradientFrom: COLORS.white,
          backgroundGradientTo: COLORS.white,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 10,
          },
          propsForDots: {
            r: "4",
            strokeWidth: "1",
            stroke: COLORS.primary,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,

          marginHorizontal: 30,

          shadowColor: "#000",
          shadowOffset: {
            width: 2,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3.84,
          elevation: 3,
        }}
      />

      {/* This is for the 3 stats below the chart */}
      <Box style={[t.flex, t.flexRow, t.justifyAround, t.mL10]}>
        <Box
          px="24px"
          py="16px"
          borderRadius={6}
          mr="40px"
          mt="8px"
          bg={COLORS.white}
          shadow="2"
        >
          <Text style={[badges.ratingText]}>Current</Text>
          <Text style={[badges.text]}>1570</Text>
        </Box>
        <Box
          px="24px"
          py="16px"
          borderRadius={6}
          mr="40px"
          mt="8px"
          bg={COLORS.white}
          shadow="2"
        >
          <Text style={[badges.ratingText]}>Percentile</Text>
          <Text style={[badges.text]}>95.1%</Text>
        </Box>
        <Box
          px="24px"
          py="16px"
          borderRadius={6}
          mr="40px"
          mt="8px"
          bg={COLORS.white}
          shadow="2"
        >
          <Text style={[badges.ratingText]}>Rank</Text>
          <Text style={[badges.text]}>#12032</Text>
        </Box>
      </Box>
      {/* <View style={[t.flex, t.flexRow, t.justifyAround, t.mL10]}>
                    <View style={[badges.badge, {backgroundColor: COLORS.lightred}]}>
                        <Text style={[badges.ratingText]}>Current</Text>
                        <Text style={[badges.text]}>1570</Text>
                    </View>
                    <View style={[badges.badge, {backgroundColor: COLORS.lightred}]}>
                        <Text style={[badges.ratingText]}>Percentile</Text>
                        <Text style={[badges.text]}>95.1%</Text>
                    </View>
                    <View style={[badges.badge, {backgroundColor: COLORS.lightred}]}>
                        <Text style={[badges.ratingText]}>Rank</Text>
                        <Text style={[badges.text]}>#12032</Text>
                    </View>
                </View> */}
    </View>
  );
}

const styles = StyleSheet.create({});

const badges = StyleSheet.create({
  badge: {
    flex: "auto",
    fontFamily: "Poppins-Bold",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 6,
    marginRight: 40,
    marginTop: 8,
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
    fontWeight: "600",
    color: COLORS.cherryGradientRight,
    textAlign: "center",
  },
});

export default RatingChart;
