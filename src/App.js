import React from 'react'
import {SafeAreaView, Text} from 'react-native'
import TelaA from './views/TelaA'
import TelaC from './views/TelaC'
import TelaB from './views/TelaB'

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TelaA />
      <TelaB />
      <TelaC />
    </SafeAreaView>
  )
}
