import React from 'react';
import { View, Dimensions, Image, StyleSheet, Text } from 'react-native';
import {  carriesTopo } from '../services/LoadData';


class Topo extends React.Component 
{
    state =
    {
        topo:
        {
            welcome: "",
            subtitle: "",

        }
    }
    updateTopo()
    {
        const ret = carriesTopo();
        this.setState({topo: ret})
    }

    componentDidMount()
    {
        this.updateTopo();
    }
    render() 
    {
        return <View style={design.header}>
            <Image style={design.image} source={require("../../../../assets/logo.png")} />
            <Text style={design.welcome}>{this.state.topo.welcome}</Text>
            <Text style={design.subtitle}>{this.state.topo.subtitle}</Text>
        </View>
    }
}

const design = StyleSheet.create({
    header:
    {
        backgroundColor: "#F6F6F6F6",
        padding: 16,

    },
    image:
    {
        width: 70,
        height: 28,
    },
    welcome:
    {
        color: "#464646",
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    subtitle:
    {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    }
})

export default Topo;