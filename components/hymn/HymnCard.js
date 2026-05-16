import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HymnCard({ hymn }) {
  return (
    <Pressable style={styles.card}>
      {/* <View style={styles.iconBox}>
        <Ionicons name="reader-outline" size={30} color="#0f351f" />
      </View> */}

      <Text style={styles.number}>{hymn.id}</Text>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {hymn.title}
        </Text>

       

        <Text style={styles.preview} numberOfLines={1}>
          {hymn.preview}
        </Text>
      </View>

      <View style={styles.actions}>
      
        <Ionicons name="chevron-forward" size={27} color="#737985" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    minHeight: 80,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#eee4d8',
    backgroundColor: '#fffdf9',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 18,
    paddingVertical: 16,
    marginBottom: 8,
  },

  iconBox: {
    width: 56,
    height: 56,
    borderRadius: 14,
    backgroundColor: '#f2f1eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },

  number: {
    color: '#0f351f',
    fontSize: 20,
    marginRight: 18,
  },

  content: {
    flex: 1,
  },

  title: {
    color: '#0f351f',
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 3,
  },


  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginLeft: 12,
  },
});