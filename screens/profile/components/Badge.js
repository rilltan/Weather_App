import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { t } from 'react-native-tailwindcss'; 

const Badge = ({ value }) => {
    return (
        <View style={[styles.badge, t.bgGray300]}>
            <Text style={[t.textGray800, styles.text]}>{value}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    badge: {
        fontFamily: "Poppins-Bold",
        padding: 3,
        paddingHorizontal: 10,
        marginLeft: -10,
        paddingVertical: 7, 
        borderRadius: 6
    },
    text: {
        fontSize: 14,
        fontWeight: '500'
    }
})


export default Badge;