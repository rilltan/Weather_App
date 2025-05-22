import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { t } from "react-native-tailwindcss";
import Ionicons from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../../constants";

function Button(props) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        props.text === "Logout"
          ? { backgroundColor: COLORS.primary }
          : { backgroundColor: COLORS.white },
      ]}
      onPress={props.onPress}
    >
      <View style={[t.w1_6, t._mL2]}>
        <Icon
          name={props.icon}
          type="ionicon"
          iconStyle={
            props.text === "Logout" ? { color: "#fff" } : styles.iconColor
          }
        />
      </View>
      <View style={[t.justifyStart, t.w4_6, t.mR8]}>
        <Text
          style={[
            styles.text,
            props.text === "Logout"
              ? { color: "#fff" }
              : { color: COLORS.black },
          ]}
        >
          {" "}
          {props.text}
        </Text>
      </View>
      {props.text === "Logout" ? (
        <Ionicons style={[t.w5]} />
      ) : (
        <Ionicons name="chevron-forward-outline" size={20} color={COLORS.red} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  header: {
    fontFamily: "Poppins-Bold",
  },
  iconColor: {
    color: "#888899",
  },
  text: {
    fontFamily: "Poppins-Regular",
  },
  container: {
    height: 54,
    flexDirection: "row",
    width: 350,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 0.5,
    borderRadius: 14,
    marginBottom: 5,
  },
});

export default Button;
