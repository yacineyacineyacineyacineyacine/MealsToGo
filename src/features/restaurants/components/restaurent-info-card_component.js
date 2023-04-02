/* eslint-disable prettier/prettier */

import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper"

export const RestaurentInfoCard = ({ restaurent = {}}) => {
  const {
    name = "Azize Restaurent",
    icon,
    photos = [
        "https://picsum.photos/250?image=9",
        "https://picsum.photos/250?image=9",
        "https://picsum.photos/250?image=9",
        "https://picsum.photos/250?image=9",
    ],
    address = "Ain Bya Bethioua, Oran",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurent;
  return(
    <Card elevation={5} style={styles.card}>
     <Card.Cover key={name} style={styles.cover} source={{uri: photos[0]}}/>
     <Text style={styles.title}>{name}</Text>
    </Card>
  )
};

const styles = StyleSheet.create({
    card: {backgroundColor: "white",  borderRadius: 5,},
    cover: {padding: 20, backgroundColor: "white",  borderRadius: 5,},
    title: {padding: 16} 
})
