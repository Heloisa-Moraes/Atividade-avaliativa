import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

export default function Equipe() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Nossa Equipe</Text>
      </View>
      <View style={styles.member}>
        <Image
          source={{ uri: 'https://funbbe.br/wp-content/uploads/2023/06/member1.jpg' }}
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Nome do Membro 1</Text>
        <Text style={styles.memberRole}>Função</Text>
      </View>
      <View style={styles.member}>
        <Image
          source={{ uri: 'https://funbbe.br/wp-content/uploads/2023/06/member2.jpg' }}
          style={styles.memberImage}
        />
        <Text style={styles.memberName}>Nome do Membro 2</Text>
        <Text style={styles.memberRole}>Função</Text>
      </View>
      {/* Adicione mais membros conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  member: {
    padding: 20,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  memberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  memberName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#4CAF50',
  },
  memberRole: {
    fontSize: 16,
    color: '#666666',
  },
});
