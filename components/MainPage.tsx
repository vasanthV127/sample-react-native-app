import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const musicians = [
  {
    name: 'Ilaiyaraaja',
    genre: 'Film, Classical, Folk',
    yearsActive: '1976–present',
    description: 'Legendary composer, conductor, and lyricist known for his innovative music in Tamil cinema.'
  },
  {
    name: 'A. R. Rahman',
    genre: 'Film, Electronic, World',
    yearsActive: '1992–present',
    description: 'Internationally acclaimed composer and singer, winner of Academy and Grammy awards.'
  },
  {
    name: 'Yuvan Shankar Raja',
    genre: 'Film, Pop, Electronic',
    yearsActive: '1997–present',
    description: 'Popular for his youthful music and innovative soundtracks in Tamil films.'
  },
  {
    name: 'Harris Jayaraj',
    genre: 'Film, Pop',
    yearsActive: '2001–present',
    description: 'Known for melodious tunes and chart-topping hits in Tamil cinema.'
  },
  {
    name: 'Deva',
    genre: 'Film, Folk',
    yearsActive: '1984–present',
    description: 'Prolific composer famous for mass hits and folk-inspired music.'
  },
  {
    name: 'Anirudh Ravichander',
    genre: 'Film, Pop, EDM',
    yearsActive: '2011–present',
    description: 'Young composer known for energetic and viral songs.'
  },
  {
    name: 'Vidyasagar',
    genre: 'Film, Classical',
    yearsActive: '1989–present',
    description: 'Renowned for melodious and classical-inspired compositions.'
  },
  {
    name: 'G. V. Prakash Kumar',
    genre: 'Film, Pop',
    yearsActive: '2006–present',
    description: 'Composer and singer, known for catchy tunes and youthful music.'
  },
  {
    name: 'Santhosh Narayanan',
    genre: 'Film, Indie, Folk',
    yearsActive: '2012–present',
    description: 'Experimental composer blending folk and indie styles.'
  },
  {
    name: 'D. Imman',
    genre: 'Film, Folk',
    yearsActive: '2002–present',
    description: 'Known for rural and folk-inspired music in Tamil films.'
  },
];

const MainPage: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tamil Musicians</Text>
      <FlatList
        data={musicians}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.detail}>Genre: {item.genre}</Text>
            <Text style={styles.detail}>Years Active: {item.yearsActive}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 24,
  },
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
    backgroundColor: '#fafafa',
    marginBottom: 8,
    borderRadius: 8,
    elevation: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  description: {
    fontSize: 14,
    color: '#333',
    marginTop: 4,
  },
});

export default MainPage;
