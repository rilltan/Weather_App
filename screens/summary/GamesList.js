import React from "react";
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import ListItem from './components/ListItem';
import { t } from 'react-native-tailwindcss';

const GamesList = ({ route, navigation }) => {
    return (
        <View>
            <ScrollView style={[t.hFull, styles.scrollableGamesList]}>
                <ListItem name="Temperature" rating={10} navigation={navigation}  />
                <ListItem name="Wind Speed" rating={20} navigation={navigation}  />
                <ListItem name="Something" rating={30} navigation={navigation} />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    scrollableGamesList: {
        marginTop: 30,
    }
})

export default GamesList;