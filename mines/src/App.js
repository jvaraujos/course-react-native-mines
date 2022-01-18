import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Text} from 'react-native';
import params from './params'
import Field from './components/Field'
export default class App extends Component{
  render (){
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
      <Text style={styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
        <Field mined/>
        <Field mined opened/>
        <Field mined opened exploded/>
        <Field flagged/>
        <Field flagged opened/>
        <Field flagged bigger/>
    </SafeAreaView>
    );
        }
};
const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor:'#F5FCFF'
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    marginTop:10
  },
  instructions: {

  }
});