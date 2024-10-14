import { StyleSheet, Text, View } from "react-native";


export default function Home(){
    return(
        <View style={styles.container}>
          <Text style={styles.text}>  Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
     container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#0D0D0D",
         color:"#FFFFFF"
     },
     text:{
        color:"#FFFFFF"
    }
})