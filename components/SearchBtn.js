import { useContext } from "react";
import { TouchableOpacity, Text,View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import RecipesContext from "./RecipeContext";

export default function SearchBtn(props){
  const {recipes} = useContext(RecipesContext)
  return(
    <View style={styles.container}>
    <TouchableOpacity
    style={styles.btn}
    onPress={()=>{props.navigation.navigate('Search',{recipes})}}>
      <Text >
      <MaterialCommunityIcons style={{textAlign:'center', color:'white'}} name="bowl-mix-outline" size={48}/>
      </Text>
    </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  container:{
    width:'98vw',
    display:"flex",
    justifyContent:'flex-end',
  },
btn: {
  width:60, 
  height:60, 
  backgroundColor:'#556b2f', 
  borderRadius:99, 
  position:'fixed',
  bottom:40,
  right:40,
  textAlign:"center",
  zIndex:100,


  }})