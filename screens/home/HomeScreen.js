import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { View, Box, useDisclose, Avatar } from "native-base";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";

import { t } from "react-native-tailwindcss";
import { COLORS, icons, images } from "../../constants";

import RecommendationItem from './components/RecommendationItem';
import WindItem from "./components/WindItem";
import RainItem from "./components/RainItem";
import SunItem from "./components/SunItem";

import axios from 'axios';


const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.APPID = 'b76c485ab461112dd75fafbdd0334228';
  config.params.units = config.params.units || 'metric';
  return config;
});

const HomeScreen = ({ navigation, route }) => {

  const [temperature, setTemperature] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [rainfall, setRainfall] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await api.get('weather', {
          params: {
            q: 'Cambridge,GB',
          },
        });
        setTemperature(response.data.main.temp);
        // Convert sunrise/sunset timestamps to local time
        const timezoneOffset = response.data.timezone; // in seconds
        const localSunrise = new Date((response.data.sys.sunrise + timezoneOffset) * 1000);
        const localSunset = new Date((response.data.sys.sunset + timezoneOffset) * 1000);

        // Format the time as HH:MM
        const sunriseHours = localSunrise.getUTCHours().toString().padStart(2, '0');
        const sunriseMinutes = localSunrise.getUTCMinutes().toString().padStart(2, '0');
        const sunsetHours = localSunset.getUTCHours().toString().padStart(2, '0');
        const sunsetMinutes = localSunset.getUTCMinutes().toString().padStart(2, '0');

        setSunrise(`${sunriseHours}:${sunriseMinutes}`);
        setSunset(`${sunsetHours}:${sunsetMinutes}`);

        //  It might not always be present, so we check.
        if (response.data.rain) {
          const rainLastHour = response.data.rain['1h']; // Rainfall in the last hour
          const rainLast3Hours = response.data.rain['3h']; // Rainfall in the last 3 hours

          if (rainLastHour) {
              setRainfall(rainLastHour);
          } else if (rainLast3Hours) {
              setRainfall(rainLast3Hours);
          } else {
             setRainfall(0);
          }
        } else {
          setRainfall(0); // No rain reported
        }

      } catch (err) {
        setError(err.message || 'Failed to fetch weather data');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <View style={styles.containerHome} onLayout={route.params.onLayoutRootView}>
      {/* This is the top section of the screen for title and action icons */}
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />
      <Spacer />
      </View>

      {/* This is the main portion of the screen */}
      <View style={styles.mainContainer}>
        {/* This is going to be the main 2 sub sections */}
        <View style={[styles.horizontalContainer]}>
              <View
                style={[
                  t.flex,
                  t.flexCol,
                  styles.circleRounded,
                  styles.streaksPadding,
                ]}
              >
                <View style={[t.flex, t.justifyCenter, t.flexCol]}>
                  <Image
                source={images.partlyCloudyImage}
                style={{
                  width: 170,
                  height: 170,
                }}
              />
              <Text style={styles.weatherText}>
                Sunny
              </Text>
              <Text style={styles.weatherNumber}>
                {temperature} °C
              </Text>
               <Text style={styles.visibilityText}>
                Visibility: 22 miles away
              </Text>
                </View>
              </View>

          {/* Second Row: Screentime */}

          {/* Screentime */}
          <TouchableOpacity style={[styles.screentimeContainer, styles.shadow]}>
            {/* The Streak text */}
            <Box
              bg={{
                linearGradient: {
                  colors: [COLORS.white, COLORS.white],
                  start: [1, 0],
                  end: [0, 1],
                },
              }}
              _text={{
                fontSize: "md",
                fontWeight: "medium",
                color: "warmGray.50",
                textAlign: "center",
              }}
              style={[
                t.flex,
                t.flexRow,
                styles.circleRounded,
                t.mT4,
                styles.shadow,
              ]}
            >
            </Box>
          </TouchableOpacity>
        </View>

        {/* Top Tabs Navigator */}
        <View style={[t.flex, t.flexCol, t.justifyBetween, t.wFull]}>
          <View style={[t.flex, t.flexRow, t.justifyBetween, t.wFull]}>
                <RecommendationItem name="Recommendation" />
                <WindItem name="Wind"   />
          </View>
          <RainItem rainfall={rainfall} navigation={navigation}  />
          <SunItem sunrise={sunrise} sunset={sunset} />
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { height: 1, width: 0 },
  },
  streaksContainer: {
    borderRadius: 1000,
    marginHorizontal: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  screentimeContainer: {
    borderRadius: 1000,
    margin: 10,
  },
  circleRounded: {
    borderRadius: 1000,
  },
  streaksPadding: {
    paddingHorizontal: 25,
    paddingVertical: 35,
  },
  badgesHeader: {
    fontFamily: "Poppins-Bold",
    fontSize: 26,
    marginVertical: 10,
    marginBottom: 25,
    fontWeight: 700,
    alignSelf: "center",
  },
  horizontalContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 20,
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
  weatherText: {
    color: COLORS.black,
    fontFamily: "Poppins-Bold",
    fontSize: 40,
    fontWeight: 700,
    alignSelf: "center",
  },
  visibilityText: {
    color: COLORS.black,
    fontFamily: "Poppins-Regular",
    fontSize: 15,
    fontWeight: 300,
    alignSelf: "center",
  },
  weatherNumber: {
    color: COLORS.black,
    fontFamily: "Poppins-Regular",
    fontSize: 50,
    fontWeight: 300,
    alignSelf: "center",
  },
  streakSubtext: {
    color: COLORS.darkgray,
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
