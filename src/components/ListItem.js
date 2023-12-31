import React from "react";
import { SafeAreaView, StyleSheet, Text, StatusBar , FlatList, View, Image, ImageBackground } from "react-native";
import { Feather } from '@expo/vector-icons';

const ListItem = (props) => {
    const { dt_txt, min, max, condition } = props
    const { item, date, temp } = styles
    return (
        <View style={styles.item}>
            <Feather name={"sun"} size={50} color={'white'} />
            <Text style={date}>{dt_txt}</Text>
            <Text style={temp}>{min}</Text>
            <Text style={temp}>{max}</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    item: {
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 30,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 5,
        backgroundColor: 'pink'
    },

    temp: {
        color: 'white',
        fontSize: 20
    },

    date: {
        color: 'white',
        fontSize: 15,
    }
});

export default ListItem;