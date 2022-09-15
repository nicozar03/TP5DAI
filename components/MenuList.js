import { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MenuCard from "./MenuCard";
import RecipesContext from "./RecipeContext";
import React from "react";
//      {things.map((e,index)=>{return(<MenuItem key={index} Item={e}/>)})}

export default function MenuList(){
  const {recipes, setRecipes, deleteRecipe, isSearch, navigation} = useContext(RecipesContext)
  const renderMenuItem = (recipe) =>(
    <MenuCard item={recipe.item} delete={deleteRecipe} isSearch={isSearch} navigation={navigation}/>
  )
  
  return (
    <FlatList 
    data={recipes}
    numColumns={2}
    renderItem={renderMenuItem}
    style={styles.list}
    columnWrapperStyle={{justifyContent:'center'}}
    />
  );
}

const styles = StyleSheet.create({
  list:{
    width:'100%',
  }
})