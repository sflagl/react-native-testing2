import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/screens/Home'
import About from './components/screens/About'
import Other from './components/screens/Other'
import { NativeRouter, Route, Link } from 'react-router-native'
import TakePics from './components/screens/TakePics'
import Detect from './components/screens/Detect'
import WriteNote from './components/screens/WriteNote'

console.disableYellowBox = true;

// create a component
const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
      <About/>
    </View>
  );
};

// class About extends React.Component {
//   render() {
//       return (
//           <View style={styles.container}>
//               <Text>About</Text>
//           </View>
//       );
//   }
// }



export default class App extends React.Component {
  render() {
    return (

    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link
            to="/"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Detect</Text>
          </Link>
          <Link
            to="/camera"
            underlayColor='#f0f4f7'
            style={styles.navItem}>
              <Text>Camera</Text>
          </Link>
          <Link
            to="/other"
            underlayColor='#f0f4f7'
            style={styles.navItem} >
              <Text>Topics</Text>
          </Link>
          <Link
            to="/writeNote"
            underlayColor='#f0f4f7'
            style={styles.navItem} >
              <Text>Write Note</Text>
          </Link>
        </View>
        
        <View style={styles.other}>
          <Route exact path="/" component={Detect}/>
          <Route path="/camera" component={TakePics}/>
          <Route path="/other" component={Other}/>
          <Route path="/writeNote" component={WriteNote}/>
        </View>
      </View>
    </NativeRouter>
      


    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }, 
  other :{
    height: '95%',
    flexDirection: 'column',
    overflow: "visible"
  }
})
