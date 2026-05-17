import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HymnCard({ hymn, activeLanguage = 'english' }) {
  const router = useRouter();

  const langData = hymn.languages?.[activeLanguage] || hymn.languages?.english || {};
  const title = langData.title || hymn.slug || `#${hymn.id}`;
  const preview = langData.verses && langData.verses.length > 0
    ? langData.verses[0].content
    : langData.chorus || '';

  return (
    <Pressable
      style={styles.card}
      onPress={() => router.push(`/${hymn.slug}?lang=${activeLanguage}`)}
    >
     

      <Text style={styles.number}>{hymn.number ?? hymn.id}</Text>

      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>

       

        <Text style={styles.preview} numberOfLines={1}>
          {preview}
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

  preview: {
    color: '#6b7280',
    fontSize: 13,
  },


  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginLeft: 12,
  },
});