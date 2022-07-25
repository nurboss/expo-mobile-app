import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import Text from './Text/text'
import { colors } from '../themes/Colors'

export default function Button({ children, style }) {
    const combineStyle = StyleSheet.compose(styles.button, style)
    const renderIcon = (children) => {
        switch (children) {
          case "Call Now": 
            return <Image       
            source={require("../../assets/image/phone.png")}
          />;
          case "Send SMS" : 
            return <Image       
            source={require("../../assets/image/message-circle.png")}
          />
        }
      }
  return (
    <View style={combineStyle}>
        <View style={{paddingLeft: 8}}>{renderIcon(children)}</View>   
      <Text style={{ paddingBottom: 7, paddingRight: 5}} preset='h3'>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    button:{
        width: 150,
        height: 48,
        backgroundColor: colors.orange,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        
    }
})