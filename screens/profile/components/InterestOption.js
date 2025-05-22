import React from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons } from '../../../constants';

const InterestOption = (props) => {
    return (
        <TouchableOpacity
            style={[
                styles.container,
                props.selected ? { backgroundColor: COLORS.primary } : { backgroundColor: COLORS.white },
                props.selected ? { borderWidth: 0 } : { borderWidth: 1, borderColor: COLORS.primary }
                ]}
            onPress={props.onPress}>

                {props.selected && <Image
                    source={icons.tickIcon}
                    resizeMode='contain'
                    style={{
                        alignSelf: 'center',
                        width: 20,
                        height: 20,
                        tintColor: props.selected ? COLORS.white : COLORS.primary,
                        marginRight: 10
                    }}
                />}

                <Text
                    style={{
                        fontFamily: 'Poppins-Regular',
                        fontSize: 13,
                        color: props.selected ? COLORS.white : COLORS.primary,
                    }}
                >{props.interestText}</Text>

        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: 100,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'white',
        margin: 5,
    }
})

export default InterestOption;