import { useContext } from "react";
import { TouchableOpacity, Text } from "react-native";
import RecipesContext from "./RecipeContext";

export default function SearchBtn(props){
  const {recipes, setRecipes, deleteRecipe, isSearch} = useContext(RecipesContext)
  return(
    <TouchableOpacity
    style={{width:60, height:60, backgroundColor:'#556b2f', borderRadius:99, position:'absolute', bottom:30, right:30}}
    onPress={()=>{props.navigation.navigate('Search',{recipes})}}>
      <Text style={{textAlign:'center', marginVertical:-25, color:'white', fontWeight:'bold', fontSize:70}}>
        +
      </Text>
    </TouchableOpacity>
  )
}