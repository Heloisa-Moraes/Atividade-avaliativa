import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  const navigateToCursos = () => {
    // Navega para a página de cursos
    navigation.navigate('Cursos');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Olá, visitante</Text>
      </View>
      <Image
        source={{ uri: 'https://funbbe.br/wp-content/uploads/2022/11/123-1024x1024.png' }}
        style={styles.logo}
      />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Seja bem-vindo à FUNBBE</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
          source={{ uri: 'https://funbbe.br/wp-content/uploads/2023/06/banner.jpg' }}
          style={styles.banner}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conheça nossos cursos</Text>
        <TouchableOpacity style={styles.button} onPress={navigateToCursos}>
          <Text style={styles.buttonText}>Ver Cursos</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sobre a FUNBBE</Text>
        <Text style={styles.sectionText}>
          A FUNBBE é uma entidade beneficente focada em ajudar...
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nossos Projetos</Text>
        <Text style={styles.sectionText}>
          Conheça os projetos que estamos desenvolvendo...
        </Text>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Saiba Mais</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2023 FUNBBE - Todos os direitos reservados.</Text>
      </View>
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
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  welcomeText: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
  },
  bannerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  banner: {
    width: '100%',
    height: 200,
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#666666',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  footer: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 14,
    color: '#999999',
    textAlign: 'center',
  },
});
