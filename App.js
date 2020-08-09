import React from 'react'
import {
  View,
  Text ,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native' ;

class App extends React.Component{

  state={
    response:[] ,
    loading:true ,
  }

  componentDidMount(){
    this.fetchData()
  }


  fetchData =  async() =>{

    const URL= 'https://jsonplaceholder.typicode.com/todos/1/photos' ;
    const URL1 = 'https://blockchain.info/ticker' ;
    const response =  await(await fetch(URL1)).json();
    this.setState({
      response , 
      loading:false
    })
    console.log(response)
  }


  _renderItem1 = ({item}) =>{
    return( <TouchableOpacity style={{marginHorizontal:10,marginVertical:10}}
    
          >
              <Text style={{alignSelf:'center',marginHorizontal:20}}>{item}</Text>
              <Text style={{alignSelf:'center',marginHorizontal:20}}>{this.state.response[item].last}</Text>


            
    </TouchableOpacity>

    )

  }

  _renderItem = ({item}) =>{
    return( <TouchableOpacity style={{marginHorizontal:10,marginVertical:10}}
        onPress={() => this.props.navigation.navigate('Details' ,{
          itemId: item.id
        })}
          >
              <Image style={{width:120 , height:100,alignSelf:'center'}} source={{uri : item.url}}/>
              <Text style={{alignSelf:'center',marginHorizontal:20}}>{item.id}</Text>

    </TouchableOpacity>

    )

  }
  _itemSepator = () =>  <View style={{backgroundColor:'grey' , height:0.5,marginVertical:5}}></View>

  render(){
    const {response , loading } = this.state ;
    return(
      <View>
          {loading && <ActivityIndicator size ="large"  color="#0000ff"/>}
          <FlatList
         // data={Object.keys(response)}
          data={(Object.keys(response)).sort((a,b) => {return this.state.response[b].last - this.state.response[a].last ;})}
          style={{alignSelf:'center'}}
          renderItem={this._renderItem1}
        // data={response}
          // data={response.sort((a, b) => { return b.id - a.id; })}
          keyExtractor= {(item ,index) => index.toString()}
          ItemSeparatorComponent={this._itemSepator}
          numColumns={3}
          />
      </View>
    )
  }
}
export default App;