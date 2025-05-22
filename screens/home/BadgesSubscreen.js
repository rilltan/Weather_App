import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, icons } from "../../constants";

import { t } from 'react-native-tailwindcss';

import BadgesListItem from "./components/BadgeSubScreen/BadgesListItem";


const BadgesSubscreen = ({ route, navigation }) => {
    return (
        <View>
            <ScrollView style={[styles.badgesHorizontal, {height: 100}]} horizontal={true} showsHorizontalScrollIndicator={false}>
                    {Array.from(Array(1).keys()).map((e) => (
                        <>
                        <Image
                            source={icons.redBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        <Image
                            source={icons.blueBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        <Image
                            source={icons.greenBadgeIcon}
                            resizeMode="contain"
                            style={{
                            alignSelf: "center",
                            width: 90,
                            height: 90,
                            }}
                        />
                        </>
                    ))}
                </ScrollView>
                <ScrollView style={[t.hFull, t.mT4, styles.badgesList]} showsVerticalScrollIndicator={false}>
                    <BadgesListItem name="Red Diamond" description="Completed 100 puzzles" date="Aug 2023" />
                    <BadgesListItem name="Blue Diamond" description="Completed 1000 puzzles" date="Sep 2023"/>
                    <BadgesListItem name="Green Diamond" description="Completed 10 daily challenges" date="Jun 2023"/>
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
    badgesHorizontal: {
        marginTop: 30,
    },
    badgesList: {

    }
})

export default BadgesSubscreen;