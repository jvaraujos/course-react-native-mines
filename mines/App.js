import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Text} from 'react-native';
export default class App extends Component{
  render (){
    return (
    <SafeAreaView style={styles.container}>
    </SafeAreaView>
    );
        }
};
const styles = StyleSheet.create({
  container: {
   flex:1,
  }
});