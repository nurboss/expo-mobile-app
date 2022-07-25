import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import { colors } from './src/themes/Colors';
import { useFonts } from 'expo-font';
import Text from './src/components/Text/text';
import Home from './src/screen/Home';

export default function App() {

  const [ loaded ] = useFonts({
    'Spartan-Bold': require('./assets/font/LeagueSpartan-Bold.ttf'),
    'Spartan-Regular': require('./assets/font/LeagueSpartan-Regular.ttf'),
    'Spartan-Extra-Bold': require('./assets/font/LeagueSpartan-ExtraBold.ttf')
  })
  if(!loaded){
    return(
      <Text>Font is loading...</Text> 
    )
  }

  return (
    <View style={styles.backContainer}>
    <View style={styles.container}>    
        <View style={styles.safeArea} />
          <Home />
          <StatusBar style="light" />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backContainer:{
    flex: 1,
    backgroundColor: colors.white,
    
  },
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
    height: 340,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40
  },
  safeArea: {
    marginTop: 25,
  }
});
