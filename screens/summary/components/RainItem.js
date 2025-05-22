import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { t } from "react-native-tailwindcss";

import { COLORS, icons, images } from "../../../constants";



const RainItem = ({name, rank, navigation}) => {


    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
            onPress={() => {navigation.push('Game Stats', {name: name})}}
        >
                <View style={[t.flex, t.flexRow, t.justifyBetween]}>
                    <View style={[t.flex, t.flexCol, t.justifyBetween]}>
                        <Text style={[styles.mainText, { color: '#000'}]}>% RAIN</Text>
                        <Text style={[styles.text, { color: '#888899'}]}>0%</Text>
                    </View>
                </View>

                <View style={[t.flex, t.flexRow, t.justifyBetween]}>
                    <View style={[t.flex, t.flexCol, t.justifyBetween]}>
                        <Text style={[styles.mainText, { color: '#000'}]}>EXP. STOP AT</Text>
                        <Text style={[styles.text, { color: '#888899'}]}>08:00 AM</Text>
                    </View>
                </View>


                <Image
                    source={images.partlyCloudyImage}
                    style={{
                        width: 90,
                        height: 90,
                    }}
                    />
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
        fontSize: 16
    },
    container: {
        height: 120,
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
        padding: 15,
    }
})

export default RainItem;