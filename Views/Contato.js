import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Contato() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Contato</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
      />
      <TextInput
        style={[styles.input, { height: 100 }]}
        placeholder="Mensagem"
        multiline
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => alert('Mensagem enviada!')}
      >
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
