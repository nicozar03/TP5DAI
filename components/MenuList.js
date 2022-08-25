import { Text, View, Pressable,TextInput, StyleSheet} from "react-native"
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import MenuCard from "../components/MenuCard";
import Autocomplete from "../components/Autocomplete";
import Order from "../components/Order";
import SortButtons from "../components/SortButtons";

const Menu = () => {
  const API_KEY = "7cb0e6f2a06740c6af934602a156a996";

  const [menuItems, setMenuItems] = useState(exampleMenu);
  const [currentOrder, setCurrentOrder] = useState({});
  const [currentTotal, setCurrentTotal] = useState(0);

  const [searchResults, setSearchResults] = useState([]);
  const [presentItems, setPresentItems] = useState({});

  // PresentItems is an object that tracks which items are present in the menu so we can avoid showing them as a search result or adding them again. This object was created to allow checking in constant time.

  useEffect((e) => {
    let itemDict = {};
    for (let item of menuItems) {
      itemDict[item.title] = true;
    }
    setPresentItems(itemDict);
  }, []);

  // Calculates the total price every time the current order is modified.

  useEffect(() => {
    let total = 0;
    for (let i in currentOrder) {
      total += Math.floor(currentOrder[i].quantity * currentOrder[i].price);
    }
    setCurrentTotal(total);
  }, [currentOrder]);

  // Persists order in Local Storage.

  const confirmOrder = () => {
    Swal.fire({
      icon: "question",
      title: "Confirm your order?",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const finalizedOrder = { ...currentOrder, total: currentTotal };
        const email = JSON.parse(localStorage.getItem("activeUser"))[0];
        const userCopy = { ...users };
        userCopy[email].orders.push(finalizedOrder);
        setCurrentOrder({});

        Swal.fire({
          icon: "success",
          title: "Your order was made!",
        });
      }
    });
  };

  // Calls Spoonacular API endpoint that returns de IDs of foods that match the search query.

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

  return (

      <View >

      <SortButtons menuItems={menuItems} setMenuItems={setMenuItems} />

      <View>
        {menuItems.length &&
          menuItems.map((item) => (
            <MenuCard
              title={item.title}
              image={item.image}
              pricePerServing={Math.round(item.pricePerServing) / 100}
              readyInMinutes={item.readyInMinutes}
              key={item.id}
              healthScore={item.healthScore}
              vegan={item.vegan}
              aggregateLikes={item.aggregateLikes}
              currentOrder={currentOrder}
              setCurrentOrder={setCurrentOrder}
            />
          ))}
      </View>

      
          <Text>
            Not finding what you want?
          </Text>
          <Text>
            Search and add from{" "}
          </Text>

          
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

        

        
          {Object.keys(currentOrder).length > 0 && (
            <>
              <Order
                currentOrder={currentOrder}
                currentTotal={currentTotal}
                setCurrentOrder={setCurrentOrder}
              />
              <Pressable style={styles.btn}
                onClick={confirmOrder}
                disabled={Object.keys(currentOrder).length === 0 ? true : false}
              >
                <Text>Make Order</Text>
              </Pressable>
            </>
          )}
      </View>

  );
};

// An initial example menu, to allow showing the basic functionality of the site even if there are no API points left.

const exampleMenu = [
  {
    title: "Hamburguer with fries",
    pricePerServing: 340.5,
    readyInMinutes: 30,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/640px-RedDot_Burger.jpg",
    id: 1,
    healthScore: 23,
    vegan: false,
    aggregateLikes: 867,
  },
  {
    title: "Falafel with spinach",
    pricePerServing: 100.1,
    readyInMinutes: 15,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Falafel_balls.jpg/640px-Falafel_balls.jpg",
    id: 2,
    healthScore: 50,
    vegan: true,
    aggregateLikes: 453,
  },
  {
    title: "The pretentious atrocity",
    pricePerServing: 1100,
    readyInMinutes: 55,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Rock_salmon_with_shrimp_and_saffron_sauce_on_a_bed_of_spinach_%282600406103%29.jpg/640px-Rock_salmon_with_shrimp_and_saffron_sauce_on_a_bed_of_spinach_%282600406103%29.jpg",
    id: 3,
    healthScore: 56,
    vegan: false,
    aggregateLikes: 2,
  },
  {
    title: "Nature's mistake",
    pricePerServing: 500,
    readyInMinutes: 25,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Earth_to_table_dinner_with_Gunnar_Karl_G%C3%ADslason_%28cropped%29.jpg/640px-Earth_to_table_dinner_with_Gunnar_Karl_G%C3%ADslason_%28cropped%29.jpg",
    id: 4,
    healthScore: 77,
    vegan: true,
    aggregateLikes: 5,
  },
  {
    title: "Chocolate death",
    pricePerServing: 400,
    readyInMinutes: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Chocolate_Ice_cream.jpg/337px-Chocolate_Ice_cream.jpg",
    id: 5,
    healthScore: 2,
    vegan: false,
    aggregateLikes: 1086,
  },
  {
    title: "Gourmet Sushi",
    pricePerServing: 900,
    readyInMinutes: 120,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Various_sushi%2C_beautiful_October_night_at_midnight.jpg/640px-Various_sushi%2C_beautiful_October_night_at_midnight.jpg",
    id: 6,
    healthScore: 66,
    vegan: false,
    aggregateLikes: 204,
  },
];
const styles = StyleSheet.create({

  btn: {
    backgroundColor: '#556b2f',
    borderRadius: '12px',
    height: '7.7vh',
    width: '24.16vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

}, 

input: {
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

},

})
export default Menu;