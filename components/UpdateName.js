import * as React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default function UpdateName() {


    const [name, updateName] = React.useState("Adarsh Mishra");

    const[previousName, updatePreviousName] = React.useState("Not New Update")

    const[enteredName, setEnteredName] = React.useState('');
    

    const updatingName = (newName) => {
      setEnteredName(newName);
    }

    const updateNameOnPress = () => {
        updatePreviousName(name);
        updateName(enteredName);
        setEnteredName("");
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.view}>
            <Text style = {{marginHorizontal: 5, color: 'blue', fontWeight: 'bold', fontSize: 20}}>Previous Name:</Text>
            <Text style = {{marginLeft: 2, fontWeight: 'bold', fontSize: 20}}> {previousName} </Text>
            </View>

            <View style = {styles.view}>
                <Text style = {{marginTop: 20, fontSize: 20, fontWeight: 'bold', color: 'green'}}>Updated Name: </Text>
                <Text style = {{margin: 20, marginLeft: 1, fontWeight: 'bold', fontSize: 20}}> {name} </Text>
            </View>

            <TextInput style = {styles.inputText} onChangeText = {updatingName} placeholder = "Enter new Name" value = {enteredName}></TextInput>

            <Button title = 'Update Name' onPress = {updateNameOnPress}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24,
    },
    paragraph: {
      margin: 24,
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    logo: {
      height: 128,
      width: 128,
    },
    view: {
        flexDirection: 'row',
    },
    inputText: {
        borderWidth: 1, padding: 15, marginTop: 15, marginBottom: 20, borderRadius: 10, textAlign: 'center', fontSize: 20
      },
  });