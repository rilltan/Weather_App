import React from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { Box } from "native-base";

import Button from "./components/Button";
import PinButton from "./components/PinButton";
import { COLORS } from "../../constants";

// Main settings/profile screen component
function SettingsScreen({ navigation }) {
  return (
    // Ensures content is rendered within safe area boundaries
    <SafeAreaView>
      {/* Box layout with padding and flex column */}
      <Box style={[t.flex, t.flexCol]} pl={10}>
        {/* Scrollable content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Profile title */}
          <View style={[t.mT12, t.selfStart]}>
            <Text style={[styles.title]}>Profile</Text>
          </View>
          {/* Account section */}
          <View style={styles.container}>
            <Text style={styles.subHeader}>Account</Text>
            {/* Edit Location button */}
            <PinButton
              text="Edit Location"
              icon="pin-outline"
              onPress={() => console.log("")}
            />
            {/* Language button */}
            <Button
              text="Language"
              icon="language-outline"
              onPress={() => console.log("")}
            />
            {/* Font Size button */}
            <Button
              text="Font Size"
              icon="text-outline"
              onPress={() => console.log("")}
            />
          </View>

          {/* Notifications section */}
          <View style={styles.container}>
            <Text style={styles.subHeader}>Notifications</Text>
            {/* Notification Settings button */}
            <Button
              text="Notification Settings"
              icon="notifications-circle-outline"
              onPress={() => console.log("")}
            />
          </View>

          {/* About section */}
          <View style={styles.container}>
            <Text style={styles.subHeader}>About</Text>
            {/* Terms of Use button */}
            <Button
              text="Terms of Use"
              icon="newspaper-outline"
              onPress={() => console.log("")}
            />
            {/* Privacy Policy button */}
            <Button
              text="Privacy Policy"
              icon="shield-checkmark-outline"
              onPress={() => console.log("")}
            />
            {/* Report a problem button */}
            <Button
              text="Report a problem"
              icon="alert-circle-outline"
              onPress={() => console.log("")}
            />
          </View>

          {/* Logout button */}
          <View style={[styles.container, t.mT3, t.mB10]}>
            <Button text="Logout" icon="exit-outline" />
          </View>
        </ScrollView>
      </Box>
    </SafeAreaView>
  );
}

// Styles for the screen
const styles = StyleSheet.create({
  title: {
    fontFamily: "Poppins-Bold",
    fontSize: 35,
    fontWeight: 800,
    alignSelf: "flex-start",
    color: COLORS.black,
  },
  header: {
    fontFamily: "Poppins-Bold",
    marginLeft: 3,
  },
  subHeader: {
    fontFamily: "Poppins-Regular",
    marginBottom: 10,
    marginTop: 17,
    // color: "#888899",
    color: COLORS.black,
    marginLeft: 3,
    fontWeight: 600,
  },
  container: {
    width: "80%",
  },
  text: {
    // color: "#9999AA",
    color: COLORS.black,
    fontFamily: "Poppins-Normal",
  },
  individualRow: {
    height: 54,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderRadius: 14,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    paddingHorizontal: 20,
  },
});

export default SettingsScreen;
