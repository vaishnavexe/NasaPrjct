import * as  React from "react";
import { View,Text,StyleSheet } from "react-native";
import { TextInput, Button} from 'react-native-paper';

const home = ({ navigation }: any) => {
    const { useState, useRef } = React;
    const [input, setinput] = useState("")
    const [Error, setError] = useState(true)

    const errorRef = useRef(false)

    const handleButton = () => {
        navigation.push('CDetails', { input })
    }
    const handleButton1 = () => {
        navigation.push('Random')
    }
    const hChange = (value: string) => {
        if (value.length < 2) {
            setError(true)
            errorRef.current = true;
        }
        else {
            setError(false)
            errorRef.current = false;
        }
        setinput(value)
    }
    return (
        <>
        <Text style={styles.title}></Text>
        <View style={{flex: 1, justifyContent: "center", width: "60%", alignSelf: "center"}}>
      <TextInput
      label="Enter Asteroid id"
      value={input}
      onChangeText={hChange}
      mode="outlined"
    />
    <Button style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:184, justifyContent: "center", alignSelf: "center"}} mode="contained" onPress={handleButton1}>
    Random Asteroid
  </Button>
  <Button disabled={Error} style={{backgroundColor:"#6600ff", marginTop:45, borderRadius:5, width:100, justifyContent: "center", alignSelf: "center"}} mode="contained" onPress={handleButton}>
    Submit
  </Button>
    </View>
    </>
    );
};
const styles = StyleSheet.create({
    title:{
    fontWeight:"bold", 
    fontSize:35, 
    alignSelf: "center", 
    color:"black"}
});
    
export default home;