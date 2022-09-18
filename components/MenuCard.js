import { useState } from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

export default function MenuCard(props) {
  const [added, setAdded] = useState(false)
  return (
    <View>
      <Card style={styles.card}>
      <Card.Cover style={{width:'100%', height:'33vh', borderTopRightRadius:27, borderTopLeftRadius:27}} source={{uri:props.item.image}}/>
        <Card.Content >
        <Text style={styles.title}>{props.item.title}</Text>
        <Text style={styles.otherData}> Vegan: {props.item.vegan ? "Yes" : "No"}</Text>
          <Text style={styles.precio}>Price:${props.item.pricePerServing}</Text>
        </Card.Content>

        <Card.Actions>
          {props.isSearch ?
            <>
              <TouchableOpacity style={styles.btn}
                onPress={() => { added ? props.deleteFromList(props.item) : props.addToList(props.item); setAdded(!added) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>{added ? 'Eliminar' : 'Agregar'}</Text>
              </TouchableOpacity>
            </>
            :
            <>
              <TouchableOpacity style={styles.btn}
                onPress={() => { props.navigation.navigate('Recipe', { props }) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Ver info</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnDelete}
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
    marginRight:'1vw'
  },


  precio: {
    fontSize: 24,
    fontWeight: 550,
  },

  otherData: {
    fontSize: 16,
  },
title:{
color:'#404040',
fontSize:'1rem',
},
  btn: {
    backgroundColor: '#556b2f',
    borderRadius: '12px',
    height: '7.7vh',
    width: '16.16vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   marginRight: 6 

  },

  btnDelete: {
    backgroundColor: '#B85B48',
    borderRadius: '12px',
    height: '7.7vh',
    width: '16.16vw',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   marginRight: 6 

  }

})


