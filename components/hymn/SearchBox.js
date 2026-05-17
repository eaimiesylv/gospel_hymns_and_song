import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBox({ value, onChangeText, activeLanguage = 'english' }) {
  const placeholders = {
    english: 'Search hymns',
    yoruba: 'Wá orin',
    igbo: 'Chọọ abụ',
  };

  const placeholder = placeholders[activeLanguage] || placeholders.english;
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search-outline" size={30} color="#0f351f" />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b7f89"
        style={styles.input}
      />

     
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    height: 56,
    borderWidth: 1,
    borderColor: '#cbd1d9',
    borderRadius: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 22,
  },

  input: {
    flex: 1,
    fontSize: 19,
    color: '#111827',
    marginHorizontal: 14,
  },
});