import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HymnHeader() {
  return (
    <View style={styles.header}>
      <View style={styles.logoBox}>
        <Ionicons name="book-outline" size={32} color="#b97714" /> 
      </View>

      <View>
        <Text style={styles.title}>Gospel Hymns & Songs</Text>
       
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

 

  title: {
    color: '#0f351f',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: -0.5,
  },


});