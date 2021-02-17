import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import StyledButton from '../StyledButton'

import styles from './styles'

const CarItem = () => {
	return (
		<View style={styles.carContainer}>
			<ImageBackground
				source={require('../../assets/images/ModelX.jpeg')}
				style={styles.image}
			/>
			<View style={styles.titles}>
				<Text style={styles.title}>Model S</Text>
				<Text style={styles.subtitles}>starting at 69,420</Text>
			</View>
			<StyledButton
				type='primary'
				content='Custom Order'
				onPress={(content) => {
					console.warn(`${content} Button pressed`)
				}}
			/>
			<StyledButton
				type='secondary'
				content='Existing Inventory'
				onPress={(content) => {
					console.warn(`${content} Button pressed`)
				}}
			/>
		</View>
	)
}

export default CarItem
