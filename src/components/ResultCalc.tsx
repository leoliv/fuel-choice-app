import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ResultCalcProps {
  title: string;
  valueAlc: string;
  valueGas: string;
  visibleFalse: () => void;
}
export const ResultCalc = ({
  title,
  valueAlc,
  valueGas,
  visibleFalse,
}: ResultCalcProps) => {
  return (
    <View style={styles.container}>
      <Image source={require("../img/gas.png")} style={styles.img} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.textPrice}>Com os preços:</Text>
      <Text style={styles.price}>Álcool: R$ {valueAlc}</Text>
      <Text style={styles.price}>Gasolina: R$ {valueGas}</Text>
      <TouchableOpacity style={styles.bntBack} onPress={visibleFalse}>
        <Text style={styles.textBntBack}>Calcular novamente</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#30EF5A",
    marginBottom: 40,
  },
  textPrice: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 15,
  },
  price: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 10,
  },
  bntBack: {
    width: "70%",
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: "#FF4D3B",
    marginTop: 20,
  },
  textBntBack: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#FF4D3B",
  },
});
