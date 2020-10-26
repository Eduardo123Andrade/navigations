import React from 'react'
import TextoCentral from '../components/TextoCentral'

export default props => {
    console.log(props.navigation.canGoBack())
    // console.log(props.route)
    const route = props.route.params || {numero : 0}
  return (
    <>
      <TextoCentral backgroundColor={'#9932cd'}>Tela C - {route.numero}</TextoCentral>
    </>
  )
}
