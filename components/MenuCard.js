import { useState } from "react";
import { StyleSheet, Text, View, Image, Touchable, TouchableOpacity } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function MenuCard(props) {
  const [added, setAdded] = useState(false)
  return (
    <View>
      <Card style={styles.card}>
      <Card.Cover style={{width:'100%', height:'33vh', borderTopRightRadius:27, borderTopLeftRadius:27}} source={{uri:props.item.image}}/>
        <Card.Content >
        <Text style={styles.titulo}>{props.item.title}</Text>
        <Text style={styles.otherData}> Vegan: {props.item.vegan ? "Yes" : "No"}</Text>
          <Text style={styles.precio}>Price:${props.item.pricePerServing}</Text>
        </Card.Content>

        <Card.Actions>
          {props.busqueda ?
            <>
              <TouchableOpacity style={!added ? styles.btnAdd : {backgroundColor: '#B85B48', borderRadius: '12px', height: '7.7vh', width: '42%',  marginLeft:'30%'}}
                onPress={() => { added ? props.deleteFromList(props.item) : props.addToList(props.item); setAdded(!added) }}>
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign:'center', marginTop:'2vh'}}>{added ? 'Eliminar' : 'Agregar'}</Text>
              </TouchableOpacity>
            </>
            :
            <>
              <TouchableOpacity style={styles.btn}
                onPress={() => { props.navigation.navigate('Receta', { props }) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Ver info</Text>
                <Feather name="info" size={24} color="white" />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => { props.borrar(props.item.id) }}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Eliminar</Text>
                <MaterialCommunityIcons name="delete-alert-outline" size={24} color="white" />
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
    width:"100%",
  },

  titulo: {
    fontSize: '1.25rem',
    textAlign:'center',
    fontWeight:600
  },
  precio: {
    fontSize: 24,
    fontWeight: 550,
    textAlign:'center'
  },

  otherData: {
    fontSize: 16,
    textAlign:'center'
  },
title:{
color:'#404040',
fontSize:'1rem',
},
  btn: {
    backgroundColor: '#556b2f',
    borderRadius: '12px',
    height: '7.7vh',
    width: '42%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   marginRight:"12%" ,

  },
  btnAdd: {
    backgroundColor: '#556b2f',
    borderRadius: '12px',
    height: '7.7vh',
    width: '42%',
    marginLeft:'30%'

  },
  btnDelete: {
    backgroundColor: '#B85B48',
    borderRadius: '12px',
    height: '7.7vh',
    width: '42%',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
   marginRight: 6 

  }

})


