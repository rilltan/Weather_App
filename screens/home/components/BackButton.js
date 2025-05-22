import React from 'react';
import { StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS, icons } from '../../../constants';

const BackButton = (props) => {
  return (
    <TouchableOpacity
      style={styles.backIcon}
      onPress={props.onPress}
    >
        <Image
            source={icons.chevronleftIcon}
            resizeMode='contain'
            style={{
              alignSelf: 'center',
              width: 18,
              height: 18,
              padding: 0,
              tintColor: COLORS.primary,
            }}
        />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
	backIcon: {
    alignItems: 'center',
    justifyContent: 'center',
		padding: 10,
    borderColor: COLORS.lightGray,
    borderWidth: 1.5,
		borderRadius: 14,
		width: 45,
		height: 45,
		// shadowColor: COLORS.black,
		// shadowOffset: { height: 10, width: 0 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
	}
});

export default BackButton;
