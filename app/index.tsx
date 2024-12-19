import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function Page() {
  const [size, setSize] = useState(6);

  function generetePassword(){
    
    let password = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n));
    }
    console.log(password);
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={require("./../src/assets/logo.png")}
          style={styles.logo}
        />
        
        <View style={styles.area}>
          <Text style={styles.title}>{size} Caracteres</Text>

          <Slider
            style={{ height: 50 }}
            step={0.5}
            thumbTintColor="#392de9"
            minimumValue={6}
            maximumValue={16}
            value={size}
            onValueChange={(value) => setSize(Math.round(value))}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={generetePassword}>
          <Text style={styles.buttonText}>Gerar Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f3f3ff",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    borderRadius: 8,
    backgroundColor: "#392de9",
    marginTop: 14,
    marginBottom: 14,
    width: 290,
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
