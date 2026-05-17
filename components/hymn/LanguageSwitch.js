import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function LanguageSwitch({ activeLanguage, onChange }) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        onPress={() => onChange('english')}
        style={[
          styles.option,
          activeLanguage === 'english' && styles.activeOption,
        ]}
      >
        <Text
          style={[
            styles.optionText,
            activeLanguage === 'english' && styles.activeText,
          ]}
        >
          English
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onChange('yoruba')}
        style={[
          styles.option,
          activeLanguage === 'yoruba' && styles.activeOption,
        ]}
      >
        <Text
          style={[
            styles.optionText,
            activeLanguage === 'yoruba' && styles.activeText,
          ]}
        >
          Yorùbá
        </Text>
      </Pressable>

      <Pressable
        onPress={() => onChange('igbo')}
        style={[
          styles.option,
          activeLanguage === 'igbo' && styles.activeOption,
        ]}
      >
        <Text
          style={[
            styles.optionText,
            activeLanguage === 'igbo' && styles.activeText,
          ]}
        >
          Igbo
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 64,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#e5ddd2',
    backgroundColor: '#f7f2ea',
    flexDirection: 'row',
    padding: 5,
    marginBottom: 22,
  },

  option: {
    flex: 1,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  activeOption: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#eee5db',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },

  optionText: {
    color: '#5d626d',
    fontSize: 20,
    fontWeight: '600',
  },

  activeText: {
    color: '#0f351f',
  },
});