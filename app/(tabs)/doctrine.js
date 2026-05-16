import { View, Text, StyleSheet } from 'react-native';

export default function DoctrineScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Doctrine</Text>
      <Text style={styles.subtitle}>This is the Doctrine page.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#24537d',
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 8,
  },

  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 17,
  },
});