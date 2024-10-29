import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { NavigationBaseProps } from "../../interfaces/Util/Navigation/NavigatorBase";

const squareWidth = "80.00%";
const squareHeight = "30.33%";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
  },
  square: {
    width: squareWidth,
    height: squareHeight,
    backgroundColor: "#D9D9D9",
    marginVertical: 5,
    marginHorizontal: "1%",
    activityOpacity: 0.5,
    padding: 10,
    borderRadius: 10,
  },
  text: {
    color: "blue",
    fontSize: 20,
    marginTop: 10,
  },
  textTitle: {
    color: "blue",
    fontSize: 30,
    marginTop: "7%",
  },
});

const MoreInfoComponent: React.FC<NavigationBaseProps> = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.textTitle}>Censo de PCDs</Text>
          <Text style={styles.text}>
            Torne mais visível as pessoas com deficiência .
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.textTitle}>Opotunidade</Text>
          <Text style={styles.text}>
            Vagas de emprego e eventos da região mais acessiveis.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.square}>
          <Text style={styles.textTitle}>Acessibilidade</Text>
          <Text style={styles.text}>
            Um site para todos, em busca de lugares para todos.
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MoreInfoComponent;
