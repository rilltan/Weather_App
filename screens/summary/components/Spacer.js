import React from 'react';
import { StyleSheet, View } from 'react-native';

const Spacer = () => {
  return (
    <View style={styles.spacer}>
    </View>
  );
};

const styles = StyleSheet.create({
	spacer: {
		padding: 10,
		width: 45,
		height: 45,
	}
});

export default Spacer;
