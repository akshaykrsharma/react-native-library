import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class TabBar extends Component {
	constructor(props) {
		super(props);
		this.state = { selectedTabIndex: 0 };
		this.data = this.props.data;
		//this.data = ['Tab1', 'Tab2', 'Tab3'];
	}

	callTabChanged = function(index) {
		this.setState({ selectedTabIndex: index });
		this.props.onTabSelection(index);
	};

	renderTabItem(item, index) {
		const style =
			index == this.state.selectedTabIndex ? this.props.selectedContainerStyle : this.props.unSelectedContainerStyle;
		const txtStyle =
			index == this.state.selectedTabIndex ? this.props.selectedTextStyle : this.props.unSelectedTextStyle;

		return (
			<View style={{ flexDirection: 'row', flex: 1 / this.data.length }}>
				<TouchableOpacity
					onPress={() => this.callTabChanged(index)}
					style={{
						...style,
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						minHeight: 40
					}}
				>
					<Text style={{ ...txtStyle }}>{item}</Text>
				</TouchableOpacity>
				{index != this.data.length - 1 && this.renderSeparator()}
			</View>
		);
	}

	renderSeparator() {
		return <View style={{ width: 1, height: '100%', backgroundColor: 'silver' }} />;
	}

	renderTab() {
		return (
			this.data && (
				<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
					{this.data.map((item, index) => {
						return this.renderTabItem(item, index);
					})}
				</View>
			)
		);
	}

	render() {
		return <View style={styles.container}>{this.renderTab()}</View>;
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	}
});
