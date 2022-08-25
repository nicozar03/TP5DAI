import { Text, View, Pressable,Image, StyleSheet} from "react-native"
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
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
           <Card style={styles.card}>
    <Card.Title title={title} />
    <Card.Cover source={{ uri: image }} />
    <Card.Content >
    
    
      <Title style={styles.precio}>Price: ${pricePerServing}</Title>
      <Title style={styles.otherData}> Vegan: {vegan ? "Yes" : "No"}</Title>
      <Title style={styles.otherData}> Health Score: {healthScore}</Title>
      
      <Title style={styles.otherData}> Likes: {aggregateLikes}</Title>
    </Card.Content>
    
    <Card.Actions>
      <Button>Agregar al carrito</Button>
      <Button>Comprar</Button>
    </Card.Actions>
  </Card>          
        </View>
        
    );
  };
  const styles = StyleSheet.create({

    card:{
  borderColor: "#8A864E" ,
  borderWidth:3,
  borderRadius: 30, 
  marginBottom: "10px",
},
 
   precio:{
   fontSize: 24,
   fontWeight: 550,
    },

  otherData:{
    fontSize: 16,
  },


  
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
  export default MenuCard;



  /*
  
          <Image source={image}

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
*/