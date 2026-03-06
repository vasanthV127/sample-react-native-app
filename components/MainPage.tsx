import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';



const MainPage: React.FC = () => {
  const [apiData, setApiData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState('');

  const fetchApiData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => {
        setApiData(data);
        setLoading(false);
        setRefreshing(false);
      })
      .catch(() => {
        setError('Failed to fetch API data');
        setLoading(false);
        setRefreshing(false);
      });
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sample API Data</Text>
      {loading ? (
        <ActivityIndicator size="small" color="#007AFF" />
      ) : error ? (
        <Text style={{ color: 'red' }}>{error}</Text>
      ) : (
        <FlatList
          data={apiData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.apiItem}>
              <Text style={styles.apiTitle}>{item.title}</Text>
              <Text style={styles.apiBody}>{item.body}</Text>
            </View>
          )}
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            fetchApiData();
          }}
        />
      )}
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
  apiItem: {
    padding: 10,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
    marginBottom: 8,
  },
  apiTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#007AFF',
  },
  apiBody: {
    fontSize: 14,
    color: '#333',
  },
});

export default MainPage;
