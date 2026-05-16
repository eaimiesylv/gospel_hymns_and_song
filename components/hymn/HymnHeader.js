import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HymnHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoBox}>
        <Ionicons name="book-outline" size={32} color="#b97714" />
        <Ionicons
          name="add-outline"
          size={34}
          color="#c9861f"
          style={styles.cross}
        />
      </View>

      <View>
        <Text style={styles.title}>Text Songs</Text>
        <Text style={styles.subtitle}>Read hymns in English or Yorùbá</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginBottom: 26,
  },

  logoBox: {
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  cross: {
    position: 'absolute',
    top: -6,
    left: 14,
  },

  title: {
    color: '#0f351f',
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -0.5,
  },

  subtitle: {
    color: '#5f6470',
    fontSize: 17,
    marginTop: 4,
  },
});