import axios from "axios";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native"
import React from "react";
import { RecipesProvider } from "../Components/RecipeContext";
import MenuList from "../Components/MenuList";
import SearchBtn from "../Components/SearchBtn";
export default function Home({route, navigation}){
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
                    <Text style={styles.title}>Este es nuestro menu</Text>
                    <Text style={styles.p}>(Haciendo click en el boton de la esquina inferior derecha podra agregar platos al menu)</Text>
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
    title:{
        fontSize:'2rem',
        marginTop:'2vh',
        textAlign:'center',
        fontWeight:'bold',
        color:'#eee',
      },
      p:{
        fontSize:'1rem',
        marginTop:'2vh',
        textAlign:'center',
        fontWeight:'500',
        color:'#eee',
      }
  });

  