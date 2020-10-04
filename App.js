import React from 'react';
import { useState } from "react";
import { Image, StyleSheet, Text, View, Dimensions ,TouchableOpacity, Button, Switch} from 'react-native';
import logo from './assets/Logo.png'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

  

const Stack = createStackNavigator();

const widthWin = Dimensions.get('window').width;
const heightWin = Dimensions.get('window').height;


function HomeScreen({ navigation }) {

const [isEnabled, setIsEnabled] = useState(false);


const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.mainview}>
    <View style={styles.container}>
      <View style={{ width: widthWin/2}}> 
      <Image source={logo} style={styles.logo} />
      </View>
      
      <View >


      
      <TouchableOpacity style={styles.FacebookStyle} activeOpacity={0.5} onPress={() => navigation.navigate('Details')}>{}
        <Image
        source={require('./assets/settings.png')}

        style={styles.ImageIconStyle}
      />
    </TouchableOpacity>
    
    </View>

    </View>

    <View style={styles.list}>
    <Text style={styles.setting}> Smoke Alarm
    
      
      <Switch style={styles.switch}

trackColor={{ false: "#767577", true: "#81b0ff" }}
thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
onValueChange={toggleSwitch}
value={isEnabled}
/>

      </Text>

    <Text style={styles.setting}> Fire Alarm</Text>
    <Text style={styles.setting}> Siren</Text>
    </View>
    

    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Setting')}
      />
    </View>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}




export default function App() {
  return (


<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Setting" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

   

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: widthWin * .9,
    marginLeft: widthWin * .05,
    //marginTop: heightWin * .1,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 10,
    marginLeft: widthWin * .05,
    marginTop: heightWin * .1
  
  },
 
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },

  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#fff',
    height: 100,
    width: 100,
    borderRadius: 5,
    margin: 5,
  },

  ImageIconStyle: {
    
    height: 50,
    width: 50,
    resizeMode: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: heightWin * .2,
    marginLeft: widthWin * .15,
  },

  TextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginRight: 20,
  },

  SeparatorLine: {
    backgroundColor: '#fff',
    width: 1,
    height: 40,
  },
  list: {
    borderWidth: 2,
    marginTop: heightWin * .3,
    width: widthWin * .9,
    
    marginLeft: widthWin * .05,
    marginRight: widthWin * .05,
    height: heightWin * .5,
    marginBottom: heightWin * .05,
  },
  mainview: {
    backgroundColor: '#fff',
  },
  setting: {
    fontSize: 25,
    marginLeft: widthWin * .02,
    padding: 10,

  },
  switch:{
    resizeMode: 'stretch',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: widthWin * .6,
   
  },
});
 





