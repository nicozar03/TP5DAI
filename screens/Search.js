import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import MenuCard from "../Components/MenuCard"
import RecipesContext from "../Components/RecipeContext"
export default function Search({route, navigation}){
  const [fetchedRecipes, setFetchedRecipes] = useState([])
  const [recipesToAdd, setRecipesToAdd] = useState([])

  const handleSubmit =()=>{
    console.log([...route.params.recipes,...recipesToAdd])
    let updatedList = [...route.params.recipes,...recipesToAdd]
    navigation.navigate('Home',{recipes:updatedList})
  }

  const searchRecipes = async (input) => {
    const filteredArray = []
    const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=9d011376615d43b78d523af4e6e1fc9b&%20diet=vegan&number=1&addRecipeInformation=true&query='+input)
    console.log(data.results[0].id)
    console.log(route.params.recipes)

    const myArrayFiltered = data.results.filter((el) => {
      return !route.params.recipes.some((f) => {
        return f.id === el.id
      });
    });


    console.log(myArrayFiltered)
    return data.results
  }


  const addToList = recipe =>{
    setRecipesToAdd([...recipesToAdd, recipe])
  }

  const deleteFromList = recipe => {
    setRecipesToAdd(recipesToAdd.filter(val=>val!=recipe))
  }

  const handleSearch = (search) =>{
    if(search.length >=2){
      //setSearch(newSearch)
      //setSearch(newSearch)
      searchRecipes(search).then(res=>{setFetchedRecipes(res)})
    }else{
      setFetchedRecipes([])
    }
  }

  const renderMenuItem = (recipe) =>(
      <MenuCard item={recipe.item} isSearch={true} addToList={addToList} deleteFromList={deleteFromList}/>

  )
  
  return(
    <>
    <View style={styles.container}>
        <View style={{flexDirection:"row", width:'80%'}}>
          <TextInput
            style={styles.input}
            onChangeText={search=>{handleSearch(search)}}
            placeholder="Buscar Receta"
            keyboardType="default"
            defaultValue=""
          />
          <TouchableOpacity 
          style={{backgroundColor:'green', flex:2, borderRadius:5, marginLeft:10, alignItems:"center",justifyContent:"center"}}
          onPress={handleSubmit}
          >
            <Text style={{color:'white', fontWeight:"bold"}}>Listo</Text>
          </TouchableOpacity>
        </View>
          <Text style={{}}>{recipesToAdd.length} plato/s agregados</Text>
        <FlatList 
        data={fetchedRecipes}
        numColumns={2}
        renderItem={renderMenuItem}
        style={styles.list}
        columnWrapperStyle={{justifyContent:'center'}}
        />
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop:60
  },input: {
    flex:10,
    width:'100%',
    margin: 0,
    borderWidth: 1,
    padding: 8,
    borderRadius:5,
  },list:{
    width:'100%'
  }
});