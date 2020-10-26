import React from 'react'
import {View, Text} from 'react-native'

export default ({children, backgroundColor, corTexto}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor|| '#000' }}>
      <Text style={{fontSize: 50, color: corTexto || '#fff'}}>{children}</Text>
    </View>
  )
}
