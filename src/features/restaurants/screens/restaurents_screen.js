/* eslint-disable prettier/prettier */
import React from "react";
import { SafeAreaView, StyleSheet, View, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurentInfo } from "../components/restaurent-info_component";
export const RestaurentScreen = () => {
  return (
    <SafeAreaView style={styles(StatusBar.currentHeight).container}>
      <View style={styles(StatusBar.currentHeight).search}>
        <Searchbar
          placeholder="Search"
          style={styles().searchBar}
          iconColor="#c3c3c3"
          elevation={3}
        />
      </View>
      <View style={styles(StatusBar.currentHeight).list}>
        <RestaurentInfo />
      </View>
    </SafeAreaView>
  );
};

const styles = (space) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      marginTop: space,
    },
    search: {
      padding: 16,
    },
    searchBar: {
      borderRadius: 5,
      backgroundColor: "#fff",
    },
    list: {
      flex: 1,
      backgroundColor: "blue",
      padding: 16,
    },
    text: {
      fontWeight: 400,
    },
  });
