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

const weatherApi = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

weatherApi.interceptors.request.use((config) => {
  config.params = config.params || {};
  // IMPORTANT: Replace with your actual OpenWeatherMap API Key
  // Consider using environment variables for security in a real app (e.g., expo-constants or react-native-dotenv)
  config.params.APPID = 'b76c485ab461112dd75fafbdd0334228';
  config.params.units = config.params.units || 'metric';
  return config;
});

// Helper function to format date for display
const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000); // OpenWeatherMap `dt` is in seconds
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
};

// Helper function to extract morning and night data from the 3-hour forecast list
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

    // Assign morning temperature (e.g., 6 AM - 9 AM data point)
    if (hour >= 6 && hour <= 9 && !dailyForecasts[dayKey].morning) {
      dailyForecasts[dayKey].morning = item.main.temp;
    }
    // Assign night temperature (e.g., 6 PM - 9 PM data point)
    if (hour >= 18 && hour <= 21 && !dailyForecasts[dayKey].night) {
      dailyForecasts[dayKey].night = item.main.temp;
    }
  });

  // Convert to an array and sort by date for consistent display
  return Object.values(dailyForecasts).sort((a, b) => a.date - b.date);
};


const SummaryScreen = ({ navigation, route }) => {
const [weatherForecast, setWeatherForecast] = useState(null);
  const [weatherLoading, setWeatherLoading] = useState(true);
  const [weatherError, setWeatherError] = useState(null);

  const weatherCity = "London"; // Example city

  // Function to fetch weather data
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

  // Initial data load effect
  useEffect(() => {
    // Keep your existing splash screen logic
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Load initial data if needed
      } catch (e) {
        console.warn(e);
      } finally {
        // Here you can start fetching initial data, including weather
        fetchWeather();
      }
    }
    prepare();
  }, []); // Run once on component mount




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
              <Text style={styles.weatherText}>
                This Week...
              </Text>
                </View>
              </View>

        </View>

        {/* Top Tabs Navigator */}
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
