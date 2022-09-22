import axios from "axios"
import React, { useEffect, useState } from "react"
import { Text, View, TextInput, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import MenuCard from "../Components/MenuCard";
import { MaterialCommunityIcons } from '@expo/vector-icons';
export default function SearchScreen({route, navigation}){
  const [fetchedRecipes, setFetchedRecipes] = useState([])
  const [recipesToAdd, setRecipesToAdd] = useState([])

  const handleSubmit =()=>{
    console.log([...route.params.recipes,...recipesToAdd])
    let updatedList = [...route.params.recipes,...recipesToAdd]
    navigation.navigate('HomeScreen',{recipes:updatedList})
  }

  const searchRecipes = async (input) => {
    const {data} = await axios.get('https://api.spoonacular.com/recipes/complexSearch/?apiKey=7cb0e6f2a06740c6af934602a156a996&%20diet=vegan&number=1&addRecipeInformation=true&query='+input)
    console.log(data.results[0].id)
    console.log(route.params.recipes)

    const myArrayFiltered = data.results.filter((a) => {
      return !route.params.recipes.some((b) => {
        return a.id === b.id
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
      <MenuCard item={recipe.item} isSearch={true} addToList={addToList} deleteFromList={deleteFromList}/>

  )
  
  return(
    <>
    <View style={styles.container}>
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
            <Text style={styles.text}>Actualizar Menu</Text>
            <MaterialCommunityIcons name="update" size={24} color="white" />
          </TouchableOpacity>
          <Text style={styles.textRecipes}>{recipesToAdd.length} plato/s agregados</Text>
        <FlatList 
        data={fetchedRecipes}
        renderItem={renderMenuItem}
        style={styles.list}
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
    width:'100%',
    borderWidth: 2,
    padding: 8,
    borderRadius:16,
    borderColor:'#8A864E',
    color: "#556b2f",
    display:"flex",
    marginBottom:"3vh",
  },
  btn:{
    backgroundColor:'#556b2f', 
    borderRadius:8, 
    width:"64%",
    display:"flex", 
    alignItems:"center",
    justifyContent:"center"
  },
  text:{
   color:'#eee',
   fontWeight:'bold', 
   textAlign:"center",
  },
  textRecipes:{
    color:'#eee',
    fontWeight:'bold',
    marginTop:'1.5vh',
    marginBottom:'1,5vh',
    textTransform:'uppercase',
   },list:{
    width:'100%',
  },

});