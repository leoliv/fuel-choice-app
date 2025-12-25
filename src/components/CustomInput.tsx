import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

interface CustomInputProps {
  title: string;
  valueText: string;
  changeText: (text: string) => void;
}

export const CustomInput = ({
  title,
  valueText,
  changeText,
}: CustomInputProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        value={valueText}
        onChangeText={changeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
  },
  input: {
    display: "flex",
    width: 350,
    height: 45,
    backgroundColor: "#fff",
    borderColor: "#0000",
    fontSize: 20,
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
});
