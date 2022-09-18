import { useContext } from "react";
import { TouchableOpacity, Text,View, StyleSheet } from "react-native";
import RecipesContext from "./RecipeContext";

export default function SearchBtn(props){
  const {recipes, setRecipes, deleteRecipe, isSearch} = useContext(RecipesContext)
  return(
    <View style={styles.container}>
    <TouchableOpacity
    style={styles.btn}
    onPress={()=>{props.navigation.navigate('Search',{recipes})}}>
      <Text style={{textAlign:'center', marginVertical:-25, color:'white', fontWeight:'bold', fontSize:70}}>
        +
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
  backgroundColor:'green', 
  borderRadius:99, 
  position:'fixed',
  bottom:40,
  right:40,
  textAlign:"center",
  zIndex:100,


  }})