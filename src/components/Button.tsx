import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ButtonProps {
  title: string;
  calc: () => void;
}

export const Button = ({ title, calc }: ButtonProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={calc}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    margin: 10,
    justifyContent: "center",
  },
  button: {
    display: "flex",
    width: 350,
    height: 45,
    backgroundColor: "#FF4D3B",
    borderColor: "#0000",
    fontSize: 20,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#fff"
  }
});
