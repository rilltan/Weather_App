import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { t } from "react-native-tailwindcss";
import Badge from './Badge';

import { images } from "../../../constants";


const RecommendationItem = ({name, rank, rating, navigation}) => {


    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
            onPress={() => {navigation.push('Game Stats', {name: name})}}
        >
            <View style={[t.flex, t.flexCol, t.justifyCenter, t.itemsCenter]}>
                
                    <Text style={[styles.text, { color: '#888899', marginBottom: 10}]}>RECOMMENDATION</Text>


                <Image
                    source={images.waterbottleImage}
                    style={{
                        width: 40,
                        height: 40,
                        marginBottom: 10
                    }}
                />

                    <Text style={[styles.text, { color: '#888899'}]}>Bring Water!</Text>
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

export default RecommendationItem;