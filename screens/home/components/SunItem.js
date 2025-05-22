import React, { Fragment, useContext } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { t } from "react-native-tailwindcss";

import { COLORS, icons, images } from "../../../constants";

const SunItem = ({sunrise, sunset}) => {


    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: "#F6F6F6" }]}
        >
            <View style={[t.flex, t.flexRow, t.justifyAround]}>

            
                    <View style={[t.flex, t.flexCol, t.w1_2, t.justifyCenter, t.contentCenter]}>
                         <Image
                                        source={images.partlyCloudyImage}
                                        style={{
                                          width: 40,
                                          height: 40,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          alignSelf: 'center',
                                        }}
                                      />
                        <Text style={[styles.mainText, t.textCenter, { color: '#000'}]}>SUNRISE</Text>
                        <Text style={[styles.text,  t.textCenter,  { color: '#888899'}]}>{sunrise} AM</Text>
                    </View>

                    <View style={[t.flex, t.flexCol, t.w1_2, t.justifyCenter, t.contentCenter]}>
                         <Image
                                        source={images.partlyCloudyImage}
                                        style={{
                                          width: 40,
                                          height: 40,
                                          justifyContent: 'center',
                                          alignItems: 'center',
                                          alignSelf: 'center',
                                        }}
                                      />
                        <Text style={[styles.mainText, t.textCenter, { color: '#000'}]}>SUNSET</Text>
                        <Text style={[styles.text,  t.textCenter,  { color: '#888899'}]}>{sunset} PM</Text>
                    </View>

                

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
        padding: 15
    }
})

export default SunItem;