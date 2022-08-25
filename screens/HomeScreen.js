import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import React from "react";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
export default function Home({route, navigation}){
    const things = [
        {id: 1, name: 'thing 1', length: 5},
        {id: 2, name: 'thing 2', length: 2},
        {id: 3, name: 'thing 3', length: 6},
        {id: 4, name: 'thing 4', length: 10},
        {id: 5, name: 'thing 5', length: 1}
    ]

    const [recipes, setRecipes] = useState([]);

    const getRecipes = async () => {
        const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=7cb0e6f2a06740c6af934602a156a996&%20diet=vegan&number=2')
        //console.log(data)
        return data
    }


    useEffect(()=>{
        getRecipes().then(function(value){setRecipes(value.results)})
    },[])

    console.log(recipes)
    return (
        <View>
            <RecipesProvider value={recipes}>
                <View style={styles.container}>
                    <MenuList/>
                </View>
            </RecipesProvider>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: "#bdb76b",
    },
  });

  