import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import MenuItem from "../Components/MenuCard"
import RecipesContext from "../Components/RecipeContext"
export default function Search({route, navigation}){
  const [fetchedRecipes, setFetchedRecipes] = useState([])
  const [recipesToAdd, setRecipesToAdd] = useState([])

  const handleSubmit =()=>{
    console.log([...route.params.recipes,...recipesToAdd])
    let updatedList = [...route.params.recipes,...recipesToAdd]
    navigation.navigate('HomeScreen',{recipes:updatedList})
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
      searchRecipes(search).then(res=>{setFetchedRecipes(res)})
    }else{
      setFetchedRecipes([])
    }
  }

  const renderMenuItem = (recipe) =>(
      <MenuItem item={recipe.item} isSearch={true} addToList={addToList} deleteFromList={deleteFromList}/>

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
          style={styles.btn}
          onPress={handleSubmit}
          >
            <Text style={styles.text}>Listo</Text>
          </TouchableOpacity>
        </View>
          <Text style={styles.textRecipes}>{recipesToAdd.length} plato/s agregados</Text>
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
    paddingTop:60,
    backgroundColor:'#bdb76b',
    height:'100vh'
  },input: {
    flex:10,
    width:'100%',
    borderWidth: 2,
    padding: 8,
    borderRadius:16,
    borderColor:'#8A864E',
    color: "#556b2f",
  },
  btn:{
    backgroundColor:'#556b2f', 
    flex:2, 
    borderRadius:8, 
    marginLeft:'1.5vw', 
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
   color:'#eee',
   fontWeight:'bold' 
  },
  textRecipes:{
    color:'#eee',
    fontWeight:'bold',
    marginTop:'1.5vh',
    marginBottom:'1,5vh',
    textTransform:'uppercase',
   },list:{
    width:'100%'
  }
});