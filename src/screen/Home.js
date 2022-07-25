import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { BellSVG, DawnArrowSVG, Distance, FullImgSVG, Mask, MenuSVG, Wash } from '../svg'
import Text from '../components/Text/text'
import { colors } from '../themes/Colors'
import Button from '../components/Button'

export default function Home() {

  return (
    <>
      <View style={Styles.icon}>
            <BellSVG />
            <MenuSVG />
      </View >
      <View style={Styles.headgroup}>
            <View><Text preset='h1'>Coved-19</Text></View>

            <View style={Styles.group}> 
                <Image       
                    source={require("../../assets/image/flag.png")}
                />
                <Text preset='h3'style={{ color: '#000', fontSize: 18}}>USA</Text>
                <DawnArrowSVG style={{ paddingRight: 20}} />
            </View>
      </View>
      <View>
        <Text style={Styles.texthead} preset='h2'>Are you feeling sick?</Text>
        <Text style={Styles.textp} preset='h4'>If you feel sick with any of covid-19 symptoms please call or SMS us immediately for help.</Text>
      </View>
      <View style={{ marginTop: 25}}></View>

      <View style={Styles.groupbutton}>
        <Button>Call Now</Button>
        <Button style={{ backgroundColor: "#4D79FF"}}>Send SMS</Button>
      </View>

      
     
     <View style={Styles.whitearea}>
        <Text style={{ color: colors.black, marginVertical: 10}} preset='h2'>Prevention</Text>
        <View style={Styles.groupPhoto}>
            <View style={Styles.childiv}>
                <Distance />
                 <Text style={{ color: colors.black, textAlign: 'center', lineHeight: 24, marginTop: 5}} preset='h4'>Avoid close{"\n"} contact</Text>
            </View>
            <View>
                <Mask />
                <Text style={{ color: colors.black, textAlign: 'center', lineHeight: 24, marginTop: 5}} preset='h4'>Clean your{"\n"}hands often</Text>
            </View>
            <View>
                <Wash />
                <Text style={{ color: colors.black, textAlign: 'center', lineHeight: 24, marginTop: 5}} preset='h4'>Wear a {"\n"}facemask</Text>
            </View>                     
        </View>
        <View style={Styles.fullimg} >
            <FullImgSVG />
        </View>
     </View>
      </>
  )
}

const Styles = StyleSheet.create({
    icon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        
    },
    headgroup:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    group: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 115,
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 50,
    },
    texthead: {
        marginTop: 20,
    },
    textp: {
        marginTop: 10,
    },
    groupbutton: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    whitearea: {
        marginTop: 10,
    },
    groupPhoto: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    fullimg:{
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})