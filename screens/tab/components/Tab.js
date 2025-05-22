import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants';

const Tab = (props) => {
    return (
        <View style={styles.tabIcon}>

          {
            props.focused ? (
              <Image
                source={props.focused_icon}
                resizeMode='contain'
                style={{
                  marginTop: props.focused ? 45 : 25,
                  alignSelf: 'center',
                  width: props.size,
                  height: props.size,
                  // tintColor: props.focused ? COLORS.primary : '#748c94',
                }}
              />
            ) : (
              <Image
                source={props.unfocused_icon}
                resizeMode='contain'
                style={{
                  marginTop: props.focused ? 45 : 25,
                  alignSelf: 'center',
                  width: props.size,
                  height: props.size,
                  // tintColor: props.focused ? COLORS.primary : '#748c94',
                }}
              />
            )
          }




              {
                props.focused &&
                (<Text style={{
                    color: props.focused ? COLORS.primary : '#748c94',
                    alignSelf: 'center',
                    fontSize: 35,
                    marginTop: -15,
                    }}>
                        •
                </Text>)
              }

              {/* <Text style={{
                  color: focused ? '#4f46e5' : '#748c94',
                  alignSelf: 'center',
                  marginTop: 5
                }}>
                Leaves
              </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: COLORS.black,
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tabIcon: {
      display: 'flex',
      justifyContent: "center"
    }
  })

export default Tab;