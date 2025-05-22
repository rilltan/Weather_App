import React from "react";
import { StyleSheet, View, Text, Dimensions } from "react-native";

import { ProgressChart } from "react-native-chart-kit";

import { t } from "react-native-tailwindcss";
import { COLORS } from "../../../constants";
import { Box } from "native-base";

function TimeChart() {
  const data = {
    labels: ["Swim"], // optional
    data: [0.8],
  };

  return (
    <Box shadow="2" borderRadius={10}>
      <View
        style={{
          position: "absolute",
          zIndex: 99,
          marginLeft: 35,
          marginTop: 55,
        }}
      >
        <Text
          style={{
            fontFamily: "Poppins-Bold",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          15 min
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          on Tangram
        </Text>
      </View>

      <ProgressChart
        data={data}
        width={150}
        height={150}
        strokeWidth={16}
        radius={60}
        chartConfig={{
          // backgroundColor: "#e26a00",
          backgroundGradientFrom: COLORS.white,
          backgroundGradientTo: COLORS.white,
          // backgroundGradientFrom: "#fed7d7",
          // backgroundGradientTo: "#fed7d7",
          // backgroundGradientFrom: COLORS.lightGrayGradientLeft,
          // backgroundGradientTo: COLORS.lightGrayGradientRight,
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 97, 95, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 97, 95, ${opacity})`,
          style: {
            borderRadius: 10,
          },
        }}
        style={{
          borderRadius: 10,
          // borderWidth: 1,
          // borderColor: COLORS.darkgray,
        }}
        hideLegend={true}
      />
    </Box>
  );
}

// const styles = StyleSheet.create({
//   progressContainer: {
//     position: "relative",
//     borderRadius: 10,
//     // borderWidth: 1,
//     // borderColor: COLORS.darkgray,
//   },
// });

export default TimeChart;
