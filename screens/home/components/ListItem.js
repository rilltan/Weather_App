import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { t } from "react-native-tailwindcss";
import Badge from './Badge';

const ListItem = ({name, rank, rating, navigation}) => {


    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
            onPress={() => {navigation.push('Game Stats', {name: name})}}
        >
            <View style={[t.flex, t.flexCol]}>
                <View style={[t.flex, t.flexRow, t.h3_4, t.wFull, t.justifyBetween]}>
                    <View style={[t.flex, t.flexCol, t.justifyBetween]}>
                        <Text style={[styles.mainText, { color: '#000'}]}>{ name }</Text>
                    </View>
                </View>

                <View style={[t.flex, t.flexRow, t.h1_4, t.wFull, t.justifyBetween]}>
                    <Text style={[styles.text, { color: '#888899'}]}>Local: #{ rank }</Text>
                </View>
            </View>
                <Badge value={ rating } />
        </TouchableOpacity>
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

export default ListItem;