import { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';

import hymns from '../../data/hymns.json';

export default function HymnDetail() {
  const { slug, lang } = useLocalSearchParams();
  const router = useRouter();

  const hymn = hymns.find((h) => h.slug === slug);


  if (!hymn) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={26} color="#0f351f" />
          </Pressable>
          <Text style={{ color: '#0f351f', fontSize: 16 }}>Hymn not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const activeLanguage = lang || 'english';
  const langData = hymn.languages?.[activeLanguage] || hymn.languages?.english || {};

  return (
    <SafeAreaView style={styles.safeArea} edges={["top"]}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="chevron-back" size={26} color="#0f351f" />
        </Pressable>

        <View style={styles.titleBox}>
          <Text style={styles.title}>{langData.title}</Text>
          <Text style={styles.number}>#{hymn.number ?? hymn.id}</Text>
        </View>
      </View>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {langData.verses && langData.verses.map((v) => (
          <View key={String(v.verseNumber)} style={styles.verseBlock}>
            <Text style={styles.verseNumber}>Verse {v.verseNumber}</Text>
            <Text style={styles.verseText}>{v.content}</Text>

            {langData.chorus ? (
              <View style={styles.chorusBox}>
                <Text style={styles.chorusLabel}>{langData.chorus.label || 'Chorus'}</Text>
                <Text style={styles.chorusText}>{typeof langData.chorus === 'string' ? langData.chorus : langData.chorus.content}</Text>
              </View>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#fffaf3' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16 },
  backBtn: { padding: 6, marginRight: 8, borderRadius: 8 },
  titleBox: {},
  title: { fontSize: 20, fontWeight: '700', color: '#0f351f' },
  number: { color: '#6b7280' },

  container: { flex: 1, paddingHorizontal: 20 },
  contentContainer: { paddingBottom: 120, paddingTop: 8 },

  verseBlock: { marginBottom: 20 },
  verseNumber: { color: '#6b7280', fontWeight: '600', marginBottom: 6 },
  verseText: { fontSize: 18, lineHeight: 28, color: '#0f351f' },

  chorusBox: {
    marginTop: 12,
    backgroundColor: '#fff7ed',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    padding: 12,
    borderRadius: 8,
  },
  chorusLabel: { fontSize: 12, color: '#92400e', fontWeight: '700', marginBottom: 4 },
  chorusText: { fontSize: 16, color: '#92400e', lineHeight: 24 },
});
