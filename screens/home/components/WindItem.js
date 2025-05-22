import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { t } from "react-native-tailwindcss";
import Badge from './Badge';

import { images } from "../../../constants";


const WindItem = ({name, rank, rating, navigation}) => {


    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
            onPress={() => {}}
        >
            <View style={[t.flex, t.flexCol, t.justifyCenter, t.itemsCenter]}>
                
                    <Text style={[styles.text, { color: '#888899', marginBottom: 10}]}>WIND SPEED</Text>


                <Image
                    source={images.wind1Image}
                    style={{
                        width: 100,
                        height: 60,
                        marginBottom: 5,
                    }}
                />
            </View>
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
        width: 200,
        flexDirection: 'row',
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
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

export default WindItem;