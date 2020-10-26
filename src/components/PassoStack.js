import React from 'react'
import {Button, View} from 'react-native'

export default props => {
  console.log(props.avancar)
  return (
    <View style={{flex: 1}}>
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        {props.navigation.canGoBack()? (
          <Button
            title='Voltar'
            onPress={() => {
              props.navigation.goBack()
            }}
          />
        ) : (
          false
        )}

        {props.avancar ? (
          <Button
            title='Avançar'
            onPress={() => {
              props.navigation.navigate(props.avancar, props.avancarParams || null )
            }}
          />
        ) : (
          false
        )}
      </View> */}
      <View style={{flex: 1}}>{props.children}</View>
    </View>
  )
}
