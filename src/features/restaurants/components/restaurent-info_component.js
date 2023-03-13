/* eslint-disable prettier/prettier */

import React from "react";
import { Text } from "react-native";

export const RestaurentInfo = ({ restaurent = {}}) => {
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
  return <Text>{name}</Text>;
};
