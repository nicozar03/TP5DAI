import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MenuCard from "./MenuCard";
import RecipesContext from "./RecipeContext";
import React from "react";

export default function Lista(){
  const {recipes, setRecipes, borrar, busqueda, navigation} = useContext(RecipesContext)
  const renderMenuItem = (recipe) =>(
    <MenuCard item={recipe.item} borrar={borrar} busqueda={busqueda} navigation={navigation}/>
  )
  
  return (
    <View style={styles.container}>
    <FlatList 
    data={recipes}
    renderItem={renderMenuItem}
    style={styles.list}
    />
    </View>

  );
}

const styles = StyleSheet.create({
  container:{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",  
  },
  list:{
    width:'100%',
    height:'auto',
    marginTop:'3vh',

  }
})