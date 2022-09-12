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
    navigation.navigate('HomeScreen',{recipes:updatedList})
  }

  const searchSpoonacular = (searchInput) => {
    if (searchInput.length >= 3) {
      const getSearchResults = async () => {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/autocomplete?apiKey=${API_KEY}&number=3&query=${searchInput}`
        );
        const searchRes = await res.json();
        setSearchResults(searchRes);
      };

      getSearchResults();
    } else setSearchResults([]);
  };

   


  const addToList = recipe =>{
    setRecipesToAdd([...recipesToAdd, recipe])
  }

  const deleteFromList = recipe => {
    setRecipesToAdd(recipesToAdd.filter(val=>val!=recipe))
  }

  const renderMenuItem = (recipe) =>(
      <MenuCard item={recipe.item} isSearch={true} addToList={addToList} deleteFromList={deleteFromList}/>

  )
  
  return(
    <>
    <View style={styles.container}>
        <View style={{flexDirection:"row", width:'80%'}}>
        <TextInput style={styles.input}
              type="text"
              id="search"
              autoComplete="off"
              placeholder="Search here."
              onChange={(e) => searchSpoonacular(e.target.value)}
            />

            {!searchResults.length
              ? ""
              : searchResults
                  .filter((result) => presentItems[result.title] !== true)
                  .map((result) => (
                    <Autocomplete
                      title={result.title}
                      id={result.id}
                      setMenuItems={setMenuItems}
                      menuItems={menuItems}
                      key={result.id}
                      API_KEY={API_KEY}
                      presentItems={presentItems}
                      setPresentItems={setPresentItems}
                    />
                  ))}
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
    marginBottom: '4vh',
    borderRadius: 12,
    color: "#556b2f",
    borderColor: "#8A864E",
    borderWidth:3,
    fontSize: 18,
    outline: 0,
    padding: 4,
    height: '7.7vh',
    width: '32.16vw',

},list:{
    width:'100%'
  }
});