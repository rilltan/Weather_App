import React from 'react';
import { Text, View } from 'react-native';
import { t } from 'react-native-tailwindcss';
import { COLORS } from '../constants'

function Title(props) {
    return (
        <View style={[{ flexDirection: 'column', justifyContent: "flex-end", alignSelf: "center"}, props.style]}>
            <Text style={{ fontFamily: 'Poppins-Bold', fontSize: props.fontSize, color: COLORS.primary, alignSelf: 'center' }}>
                Spark
            </Text>
            <Text style={[t.textBlack, t.textCenter, t.text2xl,{marginTop:10, alignSelf:'center'}]}>subtitle.</Text>

        </View>
    );
}

export default Title;