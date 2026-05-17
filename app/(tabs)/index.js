import { useMemo, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import hymns from '../../data/hymns.json';

import HymnHeader from '../../components/hymn/HymnHeader';
import LanguageSwitch from '../../components/hymn/LanguageSwitch';
import SearchBox from '../../components/hymn/SearchBox';
import HymnCard from '../../components/hymn/HymnCard';

export default function HymnScreen() {
  const [activeLanguage, setActiveLanguage] = useState('english');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchText, setSearchText] = useState('');

  const filteredHymns = useMemo(() => {
    const keyword = searchText.trim().toLowerCase();

    if (!keyword) {
      return hymns;
    }

    return hymns.filter((hymn) => {
      const langData = hymn.languages[activeLanguage] || hymn.languages['english'];
      const title = (langData?.title || '').toLowerCase();
      let chorusText = '';
      if (langData?.chorus) {
        chorusText = typeof langData.chorus === 'string' ? langData.chorus : (langData.chorus.content || '');
      }
      chorusText = chorusText.toLowerCase();
      return title.includes(keyword) || chorusText.includes(keyword);
    });
  }, [searchText, activeLanguage]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <View style={styles.container}>
        <FlatList
          data={filteredHymns}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <>
             

              <LanguageSwitch
                activeLanguage={activeLanguage}
                onChange={setActiveLanguage}
              />
               <HymnHeader activeLanguage={activeLanguage} />

              <SearchBox
                value={searchText}
                onChangeText={setSearchText}
                activeLanguage={activeLanguage}
              />

              
            </>
          }
          renderItem={({ item }) => <HymnCard hymn={item} activeLanguage={activeLanguage} />}
          contentContainerStyle={styles.listContent}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fffaf3',
  },

  container: {
    flex: 1,
    backgroundColor: '#fffaf3',
    paddingHorizontal: 20,
  },

  listContent: {
    paddingTop: 20,
    paddingBottom: 120,
  },
});