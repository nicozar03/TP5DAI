import {StyleSheet, View, Text, Button, TextInput,Pressable } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import Swal from 'sweetalert2';
import axios from "axios";
import React from "react";

const LoginScreen = ({ navigation }) => {
    const [user, onUserChange] = React.useState();
    const [password, onPasswordChange] = React.useState();
    const [recipes, setRecipes] = React.useState()
    React.useEffect(()=>{
         const data = require('../Components/exampleMenu.json')
         setRecipes(data.results)
      },[])
    
    const verificar = () => {
        if(!user || !password)
            return Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor complete los campos!',
              })

        axios({
            method: "POST",
            url: "http://challenge-react.alkemy.org",
            params: {
                email: user,
                password,
            }
        })
        .then(res => navigation.navigate("HomeScreen", {recipes}))
        .catch(err => Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error de autenticacion. Proporcione las credenciales correctas',
          }))
    }
    
    return (
        <>
        <View style={styles.body}>
        <View style={styles.content}>
        <Text style={styles.h1}>Bienvenido al restaurante</Text>
            <TextInput
                style={styles.input}
                onChangeText={onUserChange}
                value={user}
                placeholder="Ingrese su usuario: "
            />
            <TextInput
                style={styles.input}
                onChangeText={onPasswordChange}
                value={password}
                secureTextEntry={true}
                placeholder="Ingrese su contraseña: "
            />
            
                <Pressable onPress={verificar}
                style={styles.btn}
                >
                    
                    <Text style={styles.btnText}>Enviar</Text>
                    <AntDesign name="checkcircleo" size={32} color="white" />
                </Pressable>
                </View>
        </View>

        </>
    );
};

const styles = StyleSheet.create({
    body:{
       height:"100vh",
       backgroundColor: "#bdb76b",
    },
    content: {
        paddingTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    h1:{
       textAlign: 'center',
       color: '#eee', 
       fontSize:'2rem',
       marginBottom:'4vh',
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
    btnText:{
        textAlign: 'center',
        color: '#eee',
        fontSize: '18px',
        display:"inline-block"

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
});

export default LoginScreen;