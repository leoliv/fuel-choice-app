import { StatusBar } from "expo-status-bar";
import { Image, Modal, StyleSheet, Text, View } from "react-native";
import { CustomInput } from "./src/components/CustomInput";
import { useState } from "react";
import { Button } from "./src/components/Button";
import { ResultCalc } from "./src/components/ResultCalc";

export default function App() {
  const [alcohol, setAlcohol] = useState("");
  const [gasoline, setGasoline] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [useFuel, setUseFuel] = useState("");

  function handleCalcule() {
    const ratio: number = Number(alcohol) / Number(gasoline);

    if (Number.isNaN(ratio)) {
      alert("Digite o valor correspondente!");
      return;
    }

    setUseFuel(ratio < 0.7 ? "Compensa usar Álcool" : "Compensa usar Gasolina");
    setModalVisible(true);
  }
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <Image style={styles.imgLogo} source={require("./src/img/logo.png")} />
      <Text style={styles.chose}>Qual melhor opção?</Text>
      <CustomInput
        title="Álcool (preço por litro):"
        valueText={alcohol}
        changeText={(text) => setAlcohol(text)}
      />
      <CustomInput
        title="Gasolina (preço por litro):"
        valueText={gasoline}
        changeText={(text) => setGasoline(text)}
      />
      <Button title="Calcular" calc={handleCalcule} />
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        {modalVisible ? (
          <ResultCalc
            title={useFuel}
            valueAlc={alcohol}
            valueGas={gasoline}
            visibleFalse={() => setModalVisible(false)}
          />
        ) : (
          <Text>Digite os valores</Text>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
    alignItems: "center",
    justifyContent: "center",
  },
  imgLogo: {
    marginBottom: 20,
  },
  chose: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 50,
  },
});
