import { useState } from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function MenuItem(props) {
  const [added, setAdded] = useState(false)
  return (
    <View>
      <Card style={styles.card}>
        <Card.Title>{props.item.title}</Card.Title>
        <Card.Cover source={{ uri: props.item.image }} />
        <Card.Content >
          <Title style={styles.precio}>Price:${props.item.pricePerServing}</Title>
          <Title style={styles.otherData}> Vegan: {props.item.vegan ? 'Vegano' : ''}</Title>
        </Card.Content>

        <Card.Actions>
          {props.isSearch ?
            <>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', backgroundColor: 'green', borderRadius: 5, padding: 3, marginRight: 6 }}
                onPress={() => { added ? props.deleteFromList(props.item) : props.addToList(props.item); setAdded(!added) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{added ? 'Eliminar' : 'Agregar'}</Text>
              </TouchableOpacity>
            </>
            :
            <>
              <TouchableOpacity style={{ flex: 1, alignItems: 'center', backgroundColor: 'green', borderRadius: 5, padding: 3, marginRight: 6 }}
                onPress={() => { props.navigation.navigate('Recipe', { props }) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Ver info</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ flex: 1, alignItems: 'center', backgroundColor: 'red', borderRadius: 5, padding: 3 }}
                onPress={() => { props.delete(props.item.id) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Eliminar</Text>
              </TouchableOpacity>
            </>
          }
        </Card.Actions>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({

  card: {
    borderColor: "#8A864E",
    borderWidth: 3,
    borderRadius: 30,
    marginBottom: "10px",
  },

  precio: {
    fontSize: 24,
    fontWeight: 550,
  },

  otherData: {
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
    borderWidth: 3,
    fontSize: 18,
    outline: 0,
    padding: 4,
    height: '7.7vh',
    width: '32.16vw',

  },

})


/*<View style={styles.card}>
   <Image style={{width:'100%', height:100, borderRadius:20}} source={{uri:props.item.image}}/>
   <Text style={{paddingVertical:3}}>{props.item.title}</Text>
   <Text style={{marginBottom:3}}>{props.item.vegan?'Vegano':''}</Text>
   <Text style={{flex:1, padding:3, alignItems:'baseline'}}>${props.item.pricePerServing}</Text>
   <View style={{flexDirection:'row', justifyContent:'space-between'}}>
     {props.isSearch?
     <>
       <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'green', borderRadius:5, padding:3, marginRight:6}}
       onPress={()=>{added?props.deleteFromList(props.item):props.addToList(props.item); setAdded(!added)}}>
         <Text style={{color:'white',fontWeight:'bold'}}>{added?'Eliminar':'Agregar'}</Text>
       </TouchableOpacity>
     </>
     :
     <>
     <TouchableOpacity style={{flex:1,alignItems:'center',backgroundColor:'green', borderRadius:5, padding:3, marginRight:6}}
     onPress={()=>{props.navigation.navigate('Ver Plato',{props})}}>
       <Text style={{color:'white',fontWeight:'bold'}}>Ver info</Text>
     </TouchableOpacity>
     <TouchableOpacity 
     style={{flex:1,alignItems:'center',backgroundColor:'red', borderRadius:5, padding:3}}
     onPress={()=>{props.delete(props.item.id)}}>
       <Text style={{color:'white',fontWeight:'bold'}}>Eliminar</Text>
     </TouchableOpacity>
     </>
     }
   </View>
 </View>
)
}

const styles = StyleSheet.create({
card:{
 backgroundColor:'#fff',
 borderRadius:20,
 padding:10,
 margin:5,
 width:'40%',
},
})


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