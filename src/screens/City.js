import React from "react";
import { SafeAreaView, Text, StyleSheet, StatusBar, ImageBackground } from "react-native";

const City = () => {
    return (
        <SafeAreaView style={ styles.container }>
            <ImageBackground source={require("../../assets/city-bg.jpg")} style={styles.image} >
                <Text>City</Text>
            </ImageBackground>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight
    },

    image: {
        flex: 1,
    }
})

export default City;