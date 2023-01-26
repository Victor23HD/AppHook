import React, { useEffect, useState } from "react";
import { carriesProducers } from "../services/LoadData";
import { Text, FlatList, StyleSheet } from "react-native";
import Card from "./Card";

function Produtores() {

    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        const ret = carriesProducers();
        setTitle(ret.title);
        setList(ret.list);
        console.log(ret);
    }, []);

    const TopoLista = () => {
        return <Text style={design.title}>{title}</Text>
    }

    return <FlatList
        data={list}
        ListHeaderComponent={TopoLista}
        renderItem={({ item: { imagem, name, distance, stars } }) =>
          <Card {...{imagem, name, distance, stars } }/>
        }
    />

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
})


export default Produtores;

