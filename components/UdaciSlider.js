import React from 'react'
import { View, Slider } from 'react-native'

export default const Udacislider = ({ max, unit, step, value, onChange }) => {
  return (
    <View>
      <Slider
        step={step}
        minimumValue={0}
        maximumValue={max}
        value={value}
        onValueChange={onChange}
      />
      <View>
        <Text>{value}</Text>
        <Text>{unit}</Text>
      </View>
    </View>
  )
}
