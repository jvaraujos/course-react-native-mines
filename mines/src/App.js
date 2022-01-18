import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Text, View} from 'react-native'
import params from './params'
import MineField from './components/MineField'
import { createMinedBoard } from './functions'

export default class App extends Component{
  
  constructor(props){
    super(props)
    this.state=this.createState()
  }

  minesAmount=()=>{
    const columns = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(columns*rows*params.difficultLevel)
  }

  createState = () => {
    const columns = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board:createMinedBoard(rows,columns,this.minesAmount)
    }
  }

  render (){
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
      <Text style={styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <View style={styles.board}>
        <MineField board={this.state.board}></MineField>
      </View>
    </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent: 'flex-end'
  },
  board:{
    alignItems:'center',
    backgroundColor:'#AAA'
  },
})