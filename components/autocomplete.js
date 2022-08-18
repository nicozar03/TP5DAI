const Autocomplete = ({
    title,
    id,
    API_KEY,
    menuItems,
    setMenuItems,
    presentItems,
    setPresentItems,
  }) => {
    return (
     <View>
        <Text className="truncate w-32 sm:w-36 lg:w-56">{title}</Text>
        <Pressable
          onClick={async () => {
            const updatedMenu = menuItems.slice();
            const res = await fetch(
              `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=false`
            );
            const newItem = await res.json();
            updatedMenu.push(newItem);
  
            let newItemDict = { ...presentItems };
            newItemDict[title] = true;
            setPresentItems(newItemDict);
            setMenuItems(updatedMenu);
          }}
        >
          <Text>Add</Text>
        </Pressable>
        </View>
    );
  };
  
  export default Autocomplete;