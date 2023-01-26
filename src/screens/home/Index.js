import React from 'react';
import Topo from "./components/Topo";
import Produtores from './components/Produtores';
import { ScrollView, StyleSheet, StatusBar } from "react-native";
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Home() {

    
    return <ScrollView style={design.default}>
        <StatusBar barStyle={"dark-content"} backgroundColor={Colors.lighter}/>
        <Topo />
        <Produtores/>
    </ScrollView>
}
const design = StyleSheet.create({
    default:
    {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
    }
})