import { useEffect} from 'react';
import {Text, StyleSheet, View, Image } from 'react-native' 
export default function Receta({route, navigation}){
  useEffect(()=>{console.log(route.params.props.item)})
  return(
    <>
    <View style={styles.container}>
    <View style={styles.card}>
    <Image style={styles.image} source={{uri:route.params.props.item.image}}/>
    <Text style={styles.text}>{route.params.props.item.title}</Text>
    <View style={styles.detail}>
    <Text style={styles.otherData}>Precio por porción: ${route.params.props.item.pricePerServing}</Text>
      <Text style={styles.otherData}>Tiempo de preparación: {route.params.props.item.readyInMinutes} mins</Text>
      <Text style={styles.otherData}>Vegetariano: {route.params.props.item.vegetarian?'yes':'no'}</Text>
      <Text style={styles.otherData}>Vegano: {route.params.props.item.vegan?'yes':'no'}</Text>
      <Text style={styles.otherData}>Libre de gluten: {route.params.props.item.glutenFree?'yes':'no'}</Text>
      <Text style={styles.otherData}>Saludable: {route.params.props.item.healthScore}%</Text>
      <Text style={styles.otherData}>Likes {route.params.props.item.aggregateLikes}</Text>
    </View>
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
  },
  detail:{
  backgroundColor:'#8A864E',
  borderBottomLeftRadius:26,
  borderBottomRightRadius:26  
  },
  image:{
   width:'100%',
   height:'32vh',
   borderTopLeftRadius:30,
   borderTopRightRadius:30,
  }
  ,card:{
    width:'80%',
    borderColor: "#8A864E",
    borderWidth: 3,
    borderRadius: 30,
    margin:5,
  },
  text:{
    fontSize:'1.5rem',
    textAlign:'center',
    fontWeight:'bold',
    color:'#eee',
    padding:10,
  },
  otherData:{
    fontSize:'1rem',
    color:'#eee',
    fontWeight:'500',
    padding:10,
  },
}); 