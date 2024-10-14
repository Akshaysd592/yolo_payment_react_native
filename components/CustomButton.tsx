
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function CustomButton({
  text,
  styleColor,
}: {
  text: string;
  styleColor: string;
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonBox, { borderColor: `${styleColor}` }]}
    >
        <View style={styles.buttonLayout}>
        <Text style={[styles.buttonText,{color:`${styleColor}`}]}>{text}</Text>
        </View>
     
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    width: 96,
    height: 40,
    borderRadius: 40,
    borderWidth: 1,
    padding: 8,
    gap: 8,
    borderTopWidth: 1,
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonLayout:{
    width:80,
    height:24

  },
  buttonText: {
    // fontFamily: Platform.select({
    //   android: "Poppins_100Thin_Italic",
    // }),
    // fontWeight: 400,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: -0.17,
    textAlign: "center",
   
  },
});
