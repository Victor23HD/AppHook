import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import Stars from "../../../components/stars";

export default function Card({ imagem, name, distance, stars }) {
    return <View style={design.card}>
        <Image style={design.image} source={imagem} />
        <View style={design.information}>
            <View>
                <Text style={design.name}> {name} </Text>
                <Stars amount={stars}/>
            </View>
            <Text style={design.distance}> {distance} </Text>
        </View>
    </View>

}

const design = StyleSheet.create({
    title:
    {
        fontWeight: "bold",
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        marginBottom: 16,
        fontSize: 20,
        color: "#464646",
    },
    card:
    {
        backgroundColor: "#f6f6f6",
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 12,
        flexDirection: "row",

        // Android
        elevation: 4,

        // iOS
        shadowColor: "#000",
        shadowOffset:
        {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
    },
    image:
    {
        width: 48,
        height: 48,
        borderRadius: 6,
        marginVertical: 16,
        marginLeft: 16,
    },
    name:
    {
        color: "#000",
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold",

    },
    distance:
    {
        color: "#000",
        fontSize: 12,
        lineHeight: 19

    },
    information:
    {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16,
    },
})

