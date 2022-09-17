import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native"
import React from "react";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
import SearchBtn from "../Components/SearchBtn";
export default function Home({route, navigation}){
    //const apikey = route.params; esta key no anda xd
    //const apiKey = '9d011376615d43b78d523af4e6e1fc9b'
    
    const [recipes, setRecipes] = useState([])
    useEffect(()=>{setRecipes(route.params.recipes)},[route])
    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id!=id))
    }
    
    useEffect(()=>{console.log(recipes)})

    return (
        <>
            <RecipesProvider value={{recipes:recipes, setRecipes:setRecipes, deleteRecipe:deleteRecipe, isSearch:false, navigation:navigation}}>
                <View style={styles.container}>
                    <MenuList/>
                </View>
                <SearchBtn navigation={navigation}/>
            </RecipesProvider>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: "#bdb76b",
        textAlign: 'center',
        height:''
    },
  });

  