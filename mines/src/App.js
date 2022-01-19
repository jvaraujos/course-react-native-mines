import React,{Component} from 'react';
import {StyleSheet,SafeAreaView,Text, View,Alert} from 'react-native'
import params from './params'
import MineField from './components/MineField'
import { 
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosion,
  wonGame,
  showMines
 } from './functions'

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
      board:createMinedBoard(rows,columns,this.minesAmount),
      won:false,
      lost:false
    }
  }

  onOpenField = (row,column)=>{
    const board = cloneBoard(this.state.board)
    openField(board,row,column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if(lost){
      showMines(board)
      Alert.alert('Perdeuuuuuu!','Precisa treinar muito ainda')
    }
    if(won){
      Alert.alert('Parabens voce Ganhou!!!!','Avance para o proximo nivel')
    }
    this.setState({board,lost,won})
  }

  render (){
    return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Iniciando o Mines!!!</Text>
      <Text style={styles.instructions}>Tamanho da grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
      <View style={styles.board}>
        <MineField board={this.state.board}
        onOpenField={this.onOpenField}/>
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