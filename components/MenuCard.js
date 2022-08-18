import { Text, View, Pressable,Image} from "react-native"

const MenuCard = ({
    image,
    title,
    pricePerServing,
    readyInMinutes,
    healthScore,
    vegan,
    aggregateLikes,
    currentOrder,
    setCurrentOrder,
  }) => {
    function updateOrder() {
      let updatedOrder = { ...currentOrder };
      if (!updatedOrder[title]) {
        updatedOrder[title] = {
          price: pricePerServing,
          quantity: 1,
          readyInMinutes: readyInMinutes,
        };
      } else updatedOrder[title].quantity++;
  
      setCurrentOrder(updatedOrder);
    }
  
    return (
      <View>
        <View>
          <Image
            src={image}
            alt={title}
          />
  

              <Text>
                {pricePerServing}$
              </Text>
              <Text>
                {title}
              </Text>

  

                <Text>Health Score: {healthScore}</Text>
              
                <Text>Vegan: {vegan ? "Yes" : "No"}</Text>
              
                <Text>Likes: {aggregateLikes}</Text>
            

                <Text>
                  Ready in {readyInMinutes}
                </Text>
            
  
              <Pressable
                onClick={updateOrder}
              >
                <Text>Order</Text>

              </Pressable>
        
          
        </View>
        </View>
    );
  };
  
  export default MenuCard;