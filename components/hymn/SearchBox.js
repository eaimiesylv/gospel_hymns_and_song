import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SearchBox({ value, onChangeText }) {
  return (
    <View style={styles.searchBox}>
      <Ionicons name="search-outline" size={30} color="#0f351f" />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Search text songs"
        placeholderTextColor="#7b7f89"
        style={styles.input}
      />

      <Ionicons name="options-outline" size={30} color="#0f351f" />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    height: 66,
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