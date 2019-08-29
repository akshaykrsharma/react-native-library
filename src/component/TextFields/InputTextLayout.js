import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Utils from '../Utils';

export default class InputTextLayout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			secureTextEntry: true
		};
	}

	onAccessoryPress = () => {
		this.props.isPassword && this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
	};

	renderPasswordAccessory = () => {
		return (
			this.props.isPassword && (
				<Text color={TextField.defaultProps.baseColor} onPress={this.onAccessoryPress}>
					{this.state.secureTextEntry ? 'Show' : 'Hide'}
				</Text>
			)
		);
	};

	// renderPasswordAccessory = () => {
	// 	let name = !this.state.secureTextEntry ? 'visibility' : 'visibility-off';

	// 	return (
	// 		this.props.isPassword && (
	// 			<MaterialIcon
	// 				size={24}
	// 				name={name}
	// 				color={TextField.defaultProps.baseColor}
	// 				onPress={this.onAccessoryPress}
	// 				suppressHighlighting
	// 			/>
	// 		)
	// 	);
	// };

	render() {
		var keysInProps = [];

		// console.warn('props...-->', JSON.stringify(Object.keys(this.props), null, 2));
		// console.warn('val...-->', JSON.stringify(this.props[Object.keys(this.props)[0]], null, 2));

		// this.props.forEach(element => {
		// 	console.warn('item=', element);
		// });

		// const keysMyStyle = Object.keys(styles);
		// const keysMyProps = Object.keys(this.props);
		// console.warn(JSON.stringify(keysMyStyle, null, 2));

		// keysMyStyle.forEach(eleMyStyle => {
		// 	console.warn(JSON.stringify(eleMyStyle, null, 2));
		// 	keysMyProps.forEach(eleMyProps => {
		// 		if (eleMyStyle == eleMyProps) {
		// 			this.props[eleMyProps] = Utils.styleMerger(styles[eleMyStyle], this.props[eleMyProps]);
		// 		}
		// 		// console.warn('key=' + eleMyProps, 'value=' + JSON.stringify(this.props[eleMyProps], null, 2));
		// 	});
		// });

		return (
			<TextField
				{...this.props}
				labelHeight={50}
				//tintColor={'rgba(0, 0, 0, 1)'} //seperator color and Upper Label color
				containerStyle={Utils.styleMerger(styles.containerStyle, this.props.containerStyle)}
				affixTextStyle={styles.affixTextStyle}
				multiline={false}
				labelTextStyle={styles.labelTextStyle}
				//baseColor={'rgba(0, 0, 255, 1)'} // Top Lable when is not focus and color of title
				inputContainerStyle={Utils.styleMerger(styles.inputContainerStyle, this.props.inputContainerStyle)}
				secureTextEntry={this.props.isPassword && this.state.secureTextEntry}
				onTextChange={this.props.onTextChange}
				renderAccessory={this.renderPasswordAccessory}
			/>
		);
	}
}

const styles = StyleSheet.create({
	containerStyle: {
		marginHorizontal: 30,
		marginVertical: 0
	},
	inputContainerStyle: {},
	labelTextStyle: {},
	titleTextStyle: {},
	affixTextStyle: {}
});
