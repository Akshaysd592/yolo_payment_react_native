import { StyleSheet, Text, View } from "react-native";

export default function Ginie() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ginie</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0D0D0D",
  },
  text: {
    color: "#FFFFFF",
  },
});
