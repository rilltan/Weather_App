import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, icons } from '../../../constants';

const CardItem = ({
  actions,
  description,
  image,
  matches,
  name,
  onPressLeft,
  onPressRight,
  status,
  variant
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width;
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 10
    }
  ];

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: '#363636',
      fontSize: variant ? 15 : 30
    }
  ];

  return (
	<View style={styles.containerCardItem}>
		{/* IMAGE */}
		<Image source={image} style={imageStyle} />

		{/* NAME */}
		<Text style={nameStyle}>{name}</Text>

		{/* DESCRIPTION */}
		{description && (
			<Text style={styles.descriptionCardItem}>{description}</Text>
		)}

		{/* STATUS */}
		{status && (
			<View style={styles.status}>
			<View style={status === 'Online' ? styles.online : styles.offline} />
			<Text style={styles.statusText}>{status}</Text>
			</View>
		)}

		{/* ACTIONS */}
		{actions && (
			<View style={styles.actionsCardItem}>
				<TouchableOpacity style={styles.closeButton} onPress={() => onPressLeft()}>
					<Image
						source={icons.closeIcon}
						resizeMode='contain'
						style={{
						marginTop: 0,
						alignSelf: 'center',
						width: 15,
						height: 15,
						tintColor: COLORS.white,
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.button}>
					<Image
						source={icons.favouriteIcon}
						resizeMode='contain'
						style={{
						marginTop: 0,
						alignSelf: 'center',
						width: 35,
						height: 35,
						tintColor: COLORS.white,
						}}
					/>
				</TouchableOpacity>

				<TouchableOpacity style={styles.starButton} onPress={() => onPressRight()}>
					<Image
						source={icons.starIcon}
						resizeMode='contain'
						style={{
						marginTop: 0,
						alignSelf: 'center',
						width: 18,
						height: 18,
						tintColor: COLORS.white,
						}}
					/>
				</TouchableOpacity>
			</View>
		)}
    </View>
  );
};



const styles = StyleSheet.create({
  containerCardItem: {
		backgroundColor: COLORS.white,
		borderRadius: 8,
		alignItems: "center",
		margin: 10,
		marginTop: 30,
		shadowOpacity: 0.05,
		shadowRadius: 10,
		shadowColor: COLORS.black,
		shadowOffset: { height: 0, width: 0 },
	},
	matchesCardItem: {
		marginTop: -25,
		backgroundColor: COLORS.primary,
		paddingVertical: 5,
		paddingHorizontal: 20,
		borderRadius: 20
	},
	matchesTextCardItem: {
		color: COLORS.white,
	},
	descriptionCardItem: {
		color: COLORS.gray,
		textAlign: "center"
	},
	status: {
		paddingBottom: 10,
		flexDirection: "row",
		alignItems: "center"
	},
	statusText: {
		color: COLORS.gray,
		fontSize: 12
	},
	online: {
		width: 6,
		height: 6,
		backgroundColor: COLORS.darkgreen,
		borderRadius: 3,
		marginRight: 4
	},
	offline: {
		width: 6,
		height: 6,
		backgroundColor: COLORS.gray,
		borderRadius: 3,
		marginRight: 4
	},
	actionsCardItem: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 20
	},
	button: {
		width: 60,
		height: 60,
		borderRadius: 30,
		backgroundColor: COLORS.primary,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.3,
		shadowRadius: 20,
		shadowColor: COLORS.black,
		shadowOffset: { height: 10, width: 0 }
	},
	closeButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: COLORS.red,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.3,
		shadowRadius: 20,
		shadowColor: COLORS.black,
		shadowOffset: { height: 10, width: 0 }
	},
	starButton: {
		width: 40,
		height: 40,
		borderRadius: 30,
		backgroundColor: COLORS.purple,
		marginHorizontal: 7,
		alignItems: "center",
		justifyContent: "center",
		shadowOpacity: 0.3,
		shadowRadius: 20,
		shadowColor: COLORS.black,
		shadowOffset: { height: 10, width: 0 }
	},
	star: {
		color: "#FFA200"
	},
	like: {
		fontSize: 25,
		color: "#B644B2"
	},
	dislike: {
		fontSize: 25,
		color: "#363636"
	},
	flash: {
		color: "#5028D7"
	},
})


export default CardItem;
