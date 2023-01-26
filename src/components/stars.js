import React, { useEffect, useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import star from "../../assets/estrela.png";
import starGray from "../../assets/estrelaCinza.png";

export default function Stars
({
    amount: amountOld,
    editable = false,
    big = false,
}) {

    const [quantity, setQuantity] = useState(amountOld);
    const design = designs(big);

    const getImage = (index) => 
    {
        if(index < quantity)
        {
            return star;
        }else{
            return starGray;
        }
    }

    const RenderStars = () => {
        const listStarts = [];
        for(let i = 0; i < 5; i++)
        {
            listStarts.push(
            <TouchableOpacity key={i} onPress={() => setQuantity(i + 1)} disabled={editable}>
            <Image source={getImage(i)} style={design.star}/>
            </TouchableOpacity>
            );
        }
        return listStarts;
    }

    return <View style={design.view}>
    <RenderStars/>
    
    </View>
    
}

const designs = (big) => StyleSheet.create
({
    view:
    {
        flexDirection: "row",
        marginLeft: 5,
    },
    star:
    {
        height: big ? 36 : 16,
        width: big ? 36 : 16,
        marginTop: 2,
        marginRight: 2,
    }

})

