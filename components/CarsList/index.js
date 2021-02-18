import React from 'react'
import { View, FlatList } from 'react-native'
import CarItem from '../CarItem'

import styles from './styles'
import cars from './cars'

const CarsList = () => {
	console.log(cars)
	return (
		<View style={styles.container}>
			<FlatList data={cars} renderItem={({ item }) => <CarItem car={item} />} />
		</View>
	)
}

export default CarsList
