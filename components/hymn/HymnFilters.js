import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HymnFilters({ activeFilter, onChange }) {
  return (
    <View style={styles.row}>
      <View style={styles.leftGroup}>
        <Pressable
          onPress={() => onChange('all')}
          style={[styles.pill, activeFilter === 'all' && styles.activePill]}
        >
          <Text
            style={[
              styles.pillText,
              activeFilter === 'all' && styles.activePillText,
            ]}
          >
            All
          </Text>
        </Pressable>

        <Pressable
          onPress={() => onChange('recent')}
          style={[styles.pill, activeFilter === 'recent' && styles.activePill]}
        >
          <Text
            style={[
              styles.pillText,
              activeFilter === 'recent' && styles.activePillText,
            ]}
          >
            Recent
          </Text>
        </Pressable>
      </View>

      <Pressable style={styles.sortButton}>
        <Ionicons name="swap-vertical-outline" size={25} color="#a46000" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },

  leftGroup: {
    flexDirection: 'row',
    gap: 18,
  },

  pill: {
    height: 50,
    minWidth: 96,
    paddingHorizontal: 24,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#eee5db',
    backgroundColor: '#fbf8f2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  activePill: {
    backgroundColor: '#144a28',
    borderColor: '#144a28',
  },

  pillText: {
    color: '#26272b',
    fontSize: 17,
    fontWeight: '600',
  },

  activePillText: {
    color: '#fff',
  },

  sortButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#eee5db',
    backgroundColor: '#fffdf9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});