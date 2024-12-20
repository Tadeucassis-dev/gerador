import React from "react";

import { View, Text, StyleSheet, Pressable, TouchableOpacity } from "react-native";

const ModalPassword = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword}>
            <Text style={styles.text}>123123</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonSave}>
            <Text style={styles.buttonSaveText}>Salvar Senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",   
    backgroundColor: "rgba(24,24,24,0.6)",
  },
  content: {
    backgroundColor: "#fff",
    padding: 24,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    width: 250,
  },
    innerPassword: {
        backgroundColor: "#f3f3f3",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonArea: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    button: {
        backgroundColor: "#f3f3f3",
        padding: 12,
        borderRadius: 8,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    buttonSave: {
        backgroundColor: "#3939DE9",
        padding: 12,
        borderRadius: 8,
    },
    buttonSaveText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});

export { ModalPassword };
