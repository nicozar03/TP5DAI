
import { StyleSheet, View, Text, Button, TextInput, Alert, Pressable } from "react-native";
import React from "react";

const SortButtons = ({ menuItems, setMenuItems }) => {
  return (
    <View>
      <Pressable
        onClick={() =>
          setMenuItems(
            menuItems.slice().sort((a, b) => {
              return a.pricePerServing - b.pricePerServing;
            })
          )
        }
      >
        <Text>Cheapest</Text>
      </Pressable>

      <Pressable
        onClick={() =>
          setMenuItems(
            menuItems.slice().sort((a, b) => {
              return b.healthScore - a.healthScore;
            })
          )
        }
      >
        <Text>Healthiest</Text>
      </Pressable>

      <Pressable
        onClick={() =>
          setMenuItems(
            menuItems.slice().sort((a, b) => {
              return b.aggregateLikes - a.aggregateLikes;
            })
          )
        }
      >
        <Text>Likes</Text>
      </Pressable>
      </View>
  );
};

export default SortButtons;