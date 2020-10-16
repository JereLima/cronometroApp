import React, {Component} from 'react'
import { Text, View, Image, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

export default class Cronometro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      n:0, 
      botão:'Vai',
    };

    this.timer = null;

    this.vai = this.vai.bind(this)
    this.limpar = this.limpar.bind(this)
  }
 
  vai(){
    let s = this.state;

    if (this.timer != null){
        //para o relogio
        clearInterval(this.timer)
        this.timer = null;
        s.botao = "VAI";
    } else {//iniciar o relogio
      this.timer = setInterval(()=>{
        let s = this.state;
        s.n += 0.1;
        this.setState(s);
      },100);

      s.botão = "Parar"
    }

    this.setState(s);
  }

  limpar(){
    if(this.timer != null){
      //para o relogio
      clearInterval(this.timer);
      this.timer = null;
    }
     let s = this.state;
      s.n = 0;
      s.botão = 'Vai';
      this.setState(s);
  }
  render(){
    return(
        <View style={styles.page}>
          <Image style={styles.images} source={require('./src/assets/relo.png')} />
          <Text style={styles.numbers}>{this.state.n.toFixed(1)}</Text>

          <View style={styles.btnArea}>
              <TouchableOpacity style={styles.btn} onPress={this.vai}>
                <Text style={styles.textBtn}>{this.state.botão}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btn} onPress={this.limpar}>
                  <Text style={styles.textBtn}>Limpar</Text>
              </TouchableOpacity>
          </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'#fca311',
    alignItems:"center"
  },
  images:{
    resizeMode:'contain',
    width:'110%'
  },
  numbers:{
    fontSize:30,
    marginTop:-170
  },
  btnArea:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop:150,
    //backgroundColor:'#14213d'
  },
  btn:{
    marginLeft:10,
    marginRight:10,  
    backgroundColor:'#000',
    width:150,
    height:150,
    borderRadius:75,
    justifyContent:'center',
    alignItems:'center'
  },
  textBtn:{
    fontSize:25,
    color:'#fca311',
    fontWeight:'bold'
  }
})