import { Tabs } from "expo-router";
import { Image, Platform, StyleSheet, View } from "react-native";

export default function Layout() {
  return (
    
    <Tabs
      screenOptions={{
        tabBarStyle: {
          height: 70,

          backgroundColor: "#0D0D0D",
          borderColor: "#0D0D0D",
          elevation: 34,
          borderWidth: 0,
        },
      }}
    >

      {/* home screen navigation  */}
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.sideButton}>
              <Image source={require("@/assets/home.png")} />
            </View>
          ),
          tabBarLabelStyle: styles.navText,
        }}

      />


       {/* yolo pay navigation */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Yolo Pay",
          headerShown: false,
          tabBarIcon: () => (
            <>
              <View style={styles.mainbutton}></View>
              {/* scan logo  */}
              <Image
                source={require("@/assets/design.png")}
                width={20}
                height={20}
                style={{ opacity: 0.7, bottom: 15 }}
              />

              {/* curve image  */}
              <Image
                source={require("@/assets/curve2.png")}
                width={10}
                height={0}
                style={styles.curve}
              />
              <Image
                source={require("@/assets/Vector.png")}
                width={20}
                height={20}
                style={{ opacity: 70, bottom: 68 }}
              />
            </>
          ),
          tabBarLabelStyle: styles.navText,
        }}
      />


      {/* ginie  navigation  */}
      <Tabs.Screen
        name="ginie"
        options={{
          title: "ginie",
          headerShown: false,
          tabBarIcon: () => (
            <View style={styles.sideButton}>
              <Image
                source={require("@/assets/frame.png")}
                style={{ opacity: 30 }}
              />
            </View>
          ),
          tabBarLabelStyle: styles.navText,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  mainbutton: {
    width: 51,
    height: 51,
    borderRadius: 50,
    top: 18,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  sideButton: {
    width: 41,
    height: 41,
    borderWidth: 1,

    opacity: 0.3,
    borderRadius: 70,
    borderColor: "#FFFFFF",
    borderBottomWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  curve: {
    width: 360,
    height: 32,
    opacity: 80,
    position: "relative",
    bottom: 65,
  },

  navText: {
    fontFamily: Platform.select({
        android:"Poppins_100Thin_Italic"
    }),
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    color: "#FFFFFF",
  },
});
