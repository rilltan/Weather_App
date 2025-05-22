import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { View, Box } from "native-base";

import HomeTitle from "./components/HomeTitle";
import Spacer from "./components/Spacer";

import { t } from "react-native-tailwindcss";
import { COLORS } from "../../constants";
import axios from "axios";
import DayItem from "./components/DayItem";

// Create an axios instance for OpenWeatherMap API
const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

// Add API key and units to every request
weatherApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params.APPID = 'b76c485ab461112dd75fafbdd0334228';
  config.params.units = config.params.units || 'metric';
  return config;
});

// Helper: Format UNIX timestamp to readable date string
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // OpenWeatherMap `dt` is in seconds
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Helper: Process 3-hour forecast list to extract morning and night temps for each day
const processForecastData = (list) => {
  const dailyForecasts = {};

  list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const dayKey = date.toISOString().split('T')[0]; // YYYY-MM-DD

    // Initialize daily forecast if not already present
    if (!dailyForecasts[dayKey]) {
      dailyForecasts[dayKey] = {
        morning: null,
        night: null,
        date: item.dt, // Store original timestamp for sorting
      };
    }

    const hour = date.getHours();

    // Assign morning temperature (6 AM - 9 AM)
    if (hour >= 6 && hour <= 9 && !dailyForecasts[dayKey].morning) {
      dailyForecasts[dayKey].morning = item.main.temp;
    }
    // Assign night temperature (6 PM - 9 PM)
    if (hour >= 18 && hour <= 21 && !dailyForecasts[dayKey].night) {
      dailyForecasts[dayKey].night = item.main.temp;
    }
  });

  // Convert to array and sort by date
  return Object.values(dailyForecasts).sort((a, b) => a.date - b.date);
};


const SummaryScreen = ({ navigation, route }) => {
  // State for weather data, loading, and error
  const [weatherForecast, setWeatherForecast] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  const weatherCity = "London"; // Example city

  // Fetch weather data from API
  const fetchWeather = async () => {
    setWeatherLoading(true);
    setWeatherError(null);
    try {
      const response = await weatherApi.get('forecast', { params: { q: weatherCity } });
      const processedData = processForecastData(response.data.list);
      setWeatherForecast(processedData);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setWeatherError("Could not fetch weather data. Please try again later.");
      Alert.alert("Weather Error", "Failed to load weather forecast.");
    } finally {
      setWeatherLoading(false);
    }
  };

  // On mount: prepare splash screen and fetch weather
  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load initial data if needed
      } catch (e) {
        console.warn(e);
      } finally {
        // Fetch weather data
        fetchWeather();
      }
    }
    prepare();
  }, []); // Run once on component mount

  return (
    <View style={styles.containerHome} onLayout={route.params.onLayoutRootView}>
      {/* Top section: title and spacing */}
      <View style={styles.top}>
        <Spacer />
        <HomeTitle />
        <Spacer />
      </View>

      {/* Main content section */}
      <View style={styles.mainContainer}>
        {/* Section header */}
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
              <Text style={styles.weatherText}>
                This Week...
              </Text>
            </View>
          </View>
        </View>

        {/* Weekly forecast: one DayItem per day */}
        <View style={[t.flex, t.flexCol, t.justifyBetween, t.wFull]}>
          <DayItem day="Mon" weatherForecast={weatherForecast} index={0}/>
          <DayItem day="Tues" weatherForecast={weatherForecast} index={1}/>
          <DayItem day="Wed" weatherForecast={weatherForecast} index={2}/>
          <DayItem day="Thurs" weatherForecast={weatherForecast} index={3}/>
          <DayItem day="Fri" weatherForecast={weatherForecast} index={4}/>
          <DayItem day="Sat" weatherForecast={weatherForecast} index={5}/>
          <DayItem day="Sun" weatherForecast={weatherForecast} index={6}/>
        </View>
      </View>
    </View>
  );
};

// Styles for the screen
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

export default SummaryScreen;
