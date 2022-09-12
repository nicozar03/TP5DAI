import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import React from "react";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
import SearchBtn from "../components/SearchBtn";
export default function Home({route, navigation}){

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=7cb0e6f2a06740c6af934602a156a996&%20diet=vegan&number=2')
        //console.log(data)
        return data
    }

    const deleteRecipe = (id) => {
        setRecipes(recipes.filter(recipe => recipe.id!=id))
    }


    useEffect(()=>{
        getRecipes().then(function(value){setRecipes(value.results)})
    },[])

    console.log(recipes)
    return (
        <RecipesProvider value={{recipes:recipes, setRecipes:setRecipes, deleteRecipe:deleteRecipe, isSearch:false, navigation:navigation}}>
        <View style={styles.container}>
            <MenuList/>
        </View>
        <SearchBtn navigation={navigation}/>
    </RecipesProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: "#bdb76b",
        textAlign: 'center',
    },
  });

  