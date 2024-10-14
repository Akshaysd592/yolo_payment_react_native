import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CustomButton from "@/components/CustomButton";
import { EvilIcons, Feather } from "@expo/vector-icons";

// font comment remove
// freeze button working

export default function App() {
  // feeze state
  const [freeze, setFreeze] = useState(true);

  // expiry date
  const [expiryDate, setExpiryDate] = useState("00/0000");

  // cvv state
  const [cvvVisible, setCvvVisible] = useState(false);

  // cvv value
  const [cvvValue, setCvvValue] = useState("000");

  // credit card number
  const [creditCardNumber, setCreditCardNumber] = useState("0000000000000000");

  async function getRandomData() {
    let date = await faker.date.future().toISOString(); // to generate random date

    let newFormateDate = date.split("-"); // convert into required form

    setExpiryDate(`${newFormateDate[1]}/${newFormateDate[0]}`); // converting into required format

    let creditCardNumdata = await faker.finance.creditCardNumber({
      // generating credit card number
      issuer: "63[7-9]#-####-####-###L",
    }); // '6375-3265-4676-6646'

    // converting into required format
    let creditCardFormated = creditCardNumdata.split("-").join("");
    setCreditCardNumber(creditCardFormated);

    // generating cvv number
    let cvvNumber = faker.finance.creditCardCVV(); // '506'
    setCvvValue(cvvNumber);
  }

  useEffect(() => {
    getRandomData(); // updating  data when freeze value changed
  }, [freeze]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.paymentTextLayout}>
        <Text style={styles.paymentText}>select payment mode</Text>
      </View>

      <View style={styles.subPaymentsection}>
        <Text style={styles.subPaymentText}>
          choose your preferred payment method to make payment.
        </Text>
      </View>

      <View style={styles.buttonRow}>
        <CustomButton text={"Pay"} styleColor={"#FFFFFF"} />
        <CustomButton text={"Card"} styleColor={"#A90808"} />
      </View>

      <View style={styles.cardSubHeading}>
        <Text style={styles.cardSubHeaderText}>your digital debit card</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardBox}>
          {freeze ? (
            <Image
              style={styles.freezeCard}
              source={require("@/assets/design_layer.png")}
            />
          ) : (
            <View style={styles.unfreezeCard}>
              {/* yolo logo  */}
              <View style={styles.yoloLogo}>
                <Image source={require("@/assets/yolo_logo.png")} />
              </View>
              {/* yes bank logo  */}
              <View style={styles.yesLogo}>
                <Image source={require("@/assets/yes_bank.png")} />
              </View>

              {/* middle card part  */}

              <View style={styles.numberBox}>
                <Text style={styles.numberText}>{creditCardNumber}</Text>
              </View>

              {/* expiry  */}
              <View style={styles.midRightBoxLayout}>
                <View style={styles.expiryTextLayout}>
                  <Text style={styles.expiryText}>expiry</Text>
                </View>
                <View style={styles.expiryTextLayout}>
                  <Text style={styles.expiryTextValue}>{expiryDate}</Text>
                </View>
              </View>

              {/* mid right box  */}
              <View style={styles.midRightBoxLayout}>
                {/* cvv  */}
                <View style={styles.cvvTextLayout}>
                  <Text style={styles.cvvText}>CVV</Text>
                </View>

                <View style={styles.cvvTextLayout}>
                  {cvvVisible ? (
                    // cvv visible handled
                    <View style={styles.cvvVisiblestyle}>
                      <Text style={styles.cvvValues}>{cvvValue}</Text>
                      <TouchableOpacity
                        onPress={() => {
                          setCvvVisible(!cvvVisible);
                        }}
                      >
                        <Feather
                          name="eye"
                          size={24}
                          style={styles.passwordEyeopen}
                        />
                      </TouchableOpacity>
                    </View>
                  ) : (
                    <View>
                      {/* cvv invisible handled  */}
                      <Image
                        source={require("@/assets/password.png")}
                        width={38.69}
                        height={10.53}
                        style={styles.passwordStar}
                      />
                      <TouchableOpacity
                        onPress={() => {
                          setCvvVisible(!cvvVisible);
                        }}
                      >
                        <View style={styles.eyeBox}>
                          <Feather
                            name="eye-off"
                            size={24}
                            style={styles.passwordEye}
                          />
                        </View>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>

              {/* copy detail  */}
              <View>
                <Image
                  source={require("@/assets/u_copy.png")}
                  width={20}
                  height={20}
                  style={styles.copyImage}
                />
                <View style={styles.copyTextLayout}>
                  <Text style={styles.copyText}>copy details</Text>
                </View>
              </View>

              <Image
                source={require("@/assets/Group.png")}
                width={71.01}
                height={34.31}
                style={styles.rupayImage}
              />
            </View>
          )}
        </View>

        {/* middle right button part  */}
        <View style={styles.buttonBox}>
          <TouchableOpacity
            onPress={() => {
              setFreeze(!freeze);
            }}
          >
            <View
              style={[
                styles.buttonLayout,
                { borderColor: freeze ? "#A90808" : "#FFFFFF" },
              ]}
            >
              {/* according to freeze state image  */}
              {freeze ? (
                <Image source={require("@/assets/u_snowflake.png")} />
              ) : (
                <Image source={require("@/assets/u_snowflakewhite.png")} />
              )}
            </View>
          </TouchableOpacity>

          {/* updating text  */}
          <View style={styles.buttonTextLayout}>
            <Text
              style={[
                styles.buttonText,
                { color: freeze ? "#A90808" : "#FFFFFF" },
              ]}
            >
              {freeze ? "unfreeze" : "freeze"}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#0D0D0D",
  },
  container: {
    backgroundColor: "#0D0D0D",
    marginLeft: 16,

    flex: 1,
    alignItems: "flex-start",
  },
  paymentTextLayout: {
    width: 328,
    height: 36,
    top: 64,
    left: 16,
  },
  paymentText: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),

    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 36,
    letterSpacing: -0.17,
    fontWeight:"600",
  },
  subPaymentsection: {
    width: 328,
    height: 42,
    left: 16,
    top: 116,
    opacity: 0.6,
  },

  subPaymentText: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    color: "#FFFFFF",
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 21,
    letterSpacing: -0.17,
  },
  buttonRow: {
    width: 328,
    height: 40,
    top: 182,
    left: 16,
    gap: 8,
    flexDirection: "row",
  },

  cardSubHeading: {
    width: 149,
    height: 18,
    top: 270,
    left: 16,
    opacity: 0.2,
  },
  cardSubHeaderText: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    color: "#FFFFFF",
    textTransform: "uppercase",
  },
  cardContainer: {
   
    flexDirection: "row",
  },
  cardBox: {
    width: 186,
    height: 296,
    top: 304,
    left: 16,
    borderRadius: 16,
    shadowColor: "#000000B2",
    shadowOpacity: 74,
    elevation: 74,
    borderWidth: 2,
  },
  buttonBox: {
    width: 130,
    height: 296,
    top: 304,
    left: 30,
  },
  buttonLayout: {
    width: 56,
    height: 56,
    top: 79,
    borderRadius: 70,
    borderWidth: 1,
    opacity: 0.2,
    color: "#000000",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextLayout: {
    width: 46,
    height: 18,
    left: 14,
    top: 86,
  },
  buttonText: {
    fontFamily: Platform.select({
        android:"Poppins_100Thin_Italic"
    }),
    fontWeight:"500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
  },
  freezeCard: {
    left: -18,
    top: -62,
  },
  unfreezeCard: {
    height: 296,
    width: 186,
    borderRadius: 16,
    shadowColor: "#000000B2",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 40,
    shadowOpacity: 0.6,
    elevation: 74,
  },
  yoloLogo: {
    width: 48.44,
    height: 15.29,
    left: 19.06,
    top: 18.49,
    color: "#ED1C24",
  },
  yesLogo: {
    width: 48.37,
    height: 11.12,
    left: 124,
    
  },
  cardMiddle: {
    flexDirection: "row",
    left: 23.29,
    top: 76.06,
    backgroundColor: "red",
  },
  numberBox: {
    width: 34.34,
    height: 92.92,
    top: 76.08,
    left: 23.29,
    letterSpacing: 0.5,
    color: "#FFFFFF",
    borderColor: "#070606",
    textAlign: "center",
  },
  numberText: {
    color: "#FFFFFF",
  },
  midRightBoxLayout: {
    opacity: 0.5,
  },
  expiryTextLayout: {
    width: 39,
    height: 15,
    top: -20,
    left: 90,
    opacity: 0.5,
  },
  expiryText: {
    fontFamily: Platform.select({
        android:"Poppins_100Thin_Italic"
    }),
    fontWeight:"400",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    color: "#FFFFFF",
  
  },
  expiryTextValue: {
    color: "#FFFFFF",
    width: 60,
  },
  cvvTextLayout: {
    width: 27,
    height: 15,
    
    left: 90,
    opacity: 0.5,
    flexDirection: "row",
     
  },
  cvvVisiblestyle: {
    flexDirection: "row",
    height:15,
    marginBottom:8
  },
  cvvText: {
    fontFamily: Platform.select({
        android:"Poppins_100Thin_Italic"
    }),
    fontWeight:"400",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    color: "#FFFFFF",
  },
  cvvValues: {
    color: "#FFFFFF",
    gap: 8,
    fontSize:15,
    letterSpacing: 6,
  },
  passwordStar: {
    top: 6,
  },
  passwordEyeopen: {
    color: "#FFFFFF",
    left: 10,
    height:24,
    width:24
  },
  eyeBox: {
    width: 24,
    height: 24,
  },
  passwordEye: {
   
    left: 46,
    bottom: 12,
    color: "#A90808",
    height:24,
    width:24
  },
  copyImage: {
    top: 40,
    left: 14,
  },
  copyTextLayout: {
    width: 73,
    height: 18,
    top: 20,
    left: 39,
  },
  copyText: {
    fontFamily: Platform.select({
        android:"Poppins_100Thin_Italic"
    }),
    fontWeight:"500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    color: "#A90808",
  },
  rupayImage: {
    top: 34,
    left: 105.06,
  },

  cardInnerBox: {
    width: 186,
    height: 296,
    borderRadius: 16,
  },
  cardStructure: {
    height: 290,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderRadius: 12,
  },
  yoloLogoStyle: {
    width: 48.44,
    height: 15.29,
    left: 19.06,
    top: 19,
  },
  yesbankLogoStyle: {
    width: 40.44,
    height: 15.29,
    top: 8.55,
    left: 124,
  },
  creditcard: {
    width: 34.34,
    height: 92.92,
    borderRadius: 0.8,
    marginLeft: 33.29,
    top: 76.08,
    color: "#FFFFFF",
  },
  cardLeftStyle: {
    flex: 1,
    height: 92.92,
    borderRadius: 0.8,
    top: 76.08,
    left: -19,
  },
  expiryStyle: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    fontWeight: 400,
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    width: 39,
    height: 15,
    opacity: 0.5,
    color: "#FFFFFF",
  },
  cvvStyle: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 15,
    letterSpacing: -0.17,
    width: 39,
    height: 15,
    opacity: 0.5,
    color: "#FFFFFF",
  },
  passwordRow: {
    width: 71,
    height: 24,
    flexDirection: "row",
    gap: 4,
  },
  passwordSize: {
    width: 30.44,
    height: 10.29,
  },
  eyeStyle: {
    width: 20.44,
    height: 13.29,
  },
  copyStyle: {
    flexDirection: "row",
    gap: 2,
    top: 100,
    left: 19,
  },
  copyTextStyle: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    color: "#A90808",
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
  },
  groupStyle: {
    width: 71.44,
    height: 34.29,
    left: 105.06,
    top: 110,
  },

  starStyle: {
    width: 58,
    height: 58,
    top: 79,
    borderRadius: 70,
    borderWidth: 1,
    marginLeft: 6,
  },
  snowflakeStyle: { width: 20, height: 20, left: 18, marginTop: 20 },
  freezeText: {
    fontFamily: Platform.select({
      android: "Poppins_100Thin_Italic",
    }),
    fontWeight: "500",
    fontSize: 12,
    lineHeight: 18,
    letterSpacing: -0.17,
    marginLeft: 15,
    opacity: 0.8,
    top: 80,
  },
});
