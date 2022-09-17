import { useEffect} from 'react';
import {Text, StyleSheet, View, Image } from 'react-native' 
export default function Recipe({route, navigation}){
  useEffect(()=>{console.log(route.params.props.item)})
  return(
    <>
    <View style={styles.container}>
    <View style={styles.card}>
    <Image style={{width:'100%', height:150, borderRadius:20}} source={{uri:route.params.props.item.image}}/>
      <Text style={{fontWeight:'bold'}}>{route.params.props.item.title}</Text>
      <Text>Precio por porción: {route.params.props.item.pricePerServing}</Text>
      <Text>Tiempo de preparación: {route.params.props.item.readyInMinutes}</Text>
      <Text>Libre de gluten: {route.params.props.item.glutenFree?'si':'no'}</Text>
    </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'#bdb76b',
    height:'100vh',
  },card:{
    width:'90%',
    borderColor: "#8A864E",
    borderWidth: 3,
    borderRadius: 30,
    padding:10,
    margin:5,
  },
}); 