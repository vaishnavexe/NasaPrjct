import * as React from "react";
import {Text, SafeAreaView } from "react-native";
import axios from "axios";

const Random = ({ route, navigation }: any) => {
    const { useLayoutEffect, useState } = React;
    const [Error, setError] = useState(false);
    const [cDetail, setDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid":""
    })

    useLayoutEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=ZhZNHXgwXAs3urWIa2OWJdVG0OjM4cdMcPgDsTXY`)
        .then((response) => {
            const arrofAstroid = response.data.near_earth_objects;
            const randomAstroid = arrofAstroid[Math.floor(Math.random()*arrofAstroid.length)]
            console.log(randomAstroid)
            setDetail(randomAstroid)
            
        })
        .catch((error) => {
            setError(true)
        })
}, 
[])
    return (
        <SafeAreaView style={{flex: 1, width: "90%", alignSelf: "center"}}>
        <Text style={{fontSize:20,padding:15,marginTop:20}}>id : {cDetail?.id}</Text>
        <Text style={{fontSize:20,padding:15}}>name : {cDetail?.name}</Text>
        <Text style={{fontSize:20,padding:15}}>nasa_jpl_url : {cDetail?.nasa_jpl_url}</Text>
        <Text style={{fontSize:20,padding:15}}>is_potentially_hazardous_asteroid : {cDetail?.is_potentially_hazardous_asteroid.toString()}</Text>
    </SafeAreaView>
    );
};
export default Random;
