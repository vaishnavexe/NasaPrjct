import * as React from "react";
import {Text, SafeAreaView } from "react-native";
import axios from "axios";

const CDetails = ({ route, navigation }: any) => {
    const { input } = route.params
    const { useLayoutEffect, useState } = React;
    const [Error, setError] = useState(false);
    const [cDetail, setDetail] = useState({
        "id":"", "name" :"", "nasa_jpl_url":"https://" , "is_potentially_hazardous_asteroid":""
    })

    useLayoutEffect(() => {
        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${input}?api_key=ZhZNHXgwXAs3urWIa2OWJdVG0OjM4cdMcPgDsTXY`)
        .then((response) => {
            console.log(response.data)
            setDetail(response.data)
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
        <Text style={{fontSize:20,padding:15}}>is_potentially_hazardous_asteroid : {cDetail?.is_potentially_hazardous_asteroid}</Text>
    </SafeAreaView>
    );
};
export default CDetails;