import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { t } from "react-native-tailwindcss";
import Badge from './Badge';

import { COLORS, icons } from '../../../../constants'

const BadgesListItem = ({name, description, date, navigation}) => {


    return (
        <View style={[styles.container, { backgroundColor: "#F6F6F6" }]}>
            <Image
                source={icons.redBadgeIcon}
                resizeMode="contain"
                style={{
                width: 45,
                height: 45,
                }}
            />
            <View style={[t.flex, t.flexCol, {width: 170}]}>
                <View style={[t.flex, t.flexRow, t.wFull]}>
                    <View style={[t.flex, t.flexCol, t.justifyBetween]}>
                        <Text style={[styles.mainText, { color: '#000'}]} numberOfLines={1} >{ name }</Text>
                        <Text style={[styles.text, { color: '#888899'}]} numberOfLines={1} >{ description }</Text>
                    </View>
                </View>
            </View>
                <Badge date={ date } />
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        fontFamily: "Poppins-Bold"
    },
    text: {
        fontFamily: 'Poppins-SemiBold'
    },
    mainText: {
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },
    container: {
        height: 75,
        flexDirection: 'row',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 0.5,
        borderRadius: 14,
        marginBottom: 10,
        padding: 15
    }
})

export default BadgesListItem;