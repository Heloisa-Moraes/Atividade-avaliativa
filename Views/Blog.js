import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const posts = [
  {
    id: 1,
    title: 'Novidades da FUNBBE',
    content: 'Aqui você encontrará as últimas novidades sobre nossos projetos e eventos.',
  },
  {
    id: 2,
    title: 'Como ajudar a FUNBBE?',
    content: 'Descubra maneiras de colaborar com a FUNBBE e fazer a diferença na comunidade.',
  },
];

export default function Blog() {
  return (
    <ScrollView style={styles.container}>
      {posts.map(post => (
        <TouchableOpacity key={post.id} style={styles.post}>
          <Text style={styles.postTitle}>{post.title}</Text>
          <Text style={styles.postContent}>{post.content}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  post: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 14,
    color: '#666666',
  },
});
